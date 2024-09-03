/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {PluginOptions, defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { DeskStructure } from './sanity/plugins/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { unsplashAssetSource, unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'




// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])
// Define the singleton document types
const singletonTypes = new Set(["settings"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
   plugins: [
    structureTool({
     structure: DeskStructure
    }),
    unsplashImageAsset(),
          process.env.NODE_ENV === "development" &&
      visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean) as PluginOptions[],
 schema:{
     types: schema,
     templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
   document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  form:{
       image: {
      assetSources: (previousAssetSources, { schema }) => {
        if (schema.name === 'movie-image') {
          return previousAssetSources.filter((assetSource) => assetSource !== unsplashAssetSource)
        }
        return previousAssetSources
      },
    },
  }

})
