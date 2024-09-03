import {type StructureResolver ,StructureBuilder} from 'sanity/structure'
import { createPageTreeDocumentList } from '@q42/sanity-plugin-page-tree'
import {pageTreeConfig} from '@/page-tree-config'


 const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

    
export const DeskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Welcome to your Desk!')
    .items([
          singletonListItem(S, "settings", "Global Settings"),
          S.divider(),
 S.listItem()
              .title('Pages')
              .child(
                createPageTreeDocumentList(S, {
                  config: pageTreeConfig,
                  extendDocumentList: builder =>
                    builder.id('pages').title('Pages').apiVersion(pageTreeConfig.apiVersion),
                }),
              )

    ])