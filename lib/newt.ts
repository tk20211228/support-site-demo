import "server-only";
import { createClient } from "newt-client-js";
import { ExternalLink } from "@/app/types/external-link";
import { cache } from "react";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getExternalLinks = cache(async () => {
  const { items } = await client.getContents<ExternalLink>({
    appUid: "external-link",
    modelUid: "external-link",
    query: {
      select: ["_id", "linkName", "url", "image"],
    },
  });
  return items;
});
