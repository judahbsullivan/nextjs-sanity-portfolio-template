import { createNextPageTreeClient } from "@q42/sanity-plugin-page-tree/next";
import { pageTreeConfig } from "./page-tree-config";
import { client } from "./sanity/lib/client";

export const pageTreeClient = createNextPageTreeClient({
  config: pageTreeConfig,
  client: client,
});
