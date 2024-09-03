import { SettingsPayload } from "@/src/types/types";
import { client } from "./client";







export const settingsQuery  = `
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

export async function getGlobalSettings(){
  const settings = await client.fetch<SettingsPayload>(settingsQuery)
  return settings
}