import "server-only";
import { createClient } from "newt-client-js";
import { ExternalLink, ExternalLinkImage, imageSrc } from "@/app/types/external-link";
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
      select: ["_id", "no", "linkName", "url", "image","explainLink","tag",],
      order: ['no'],
    },
  });
  // console.log(items)

  const updatedItems = await Promise.all(items.map(async (item) => {
    const response = await client.getContents<ExternalLinkImage>({
      appUid: "external-link",
      modelUid: "image",
      query: {
        _id: item.image._id
      },
    });
    // console.log("response",response)
    return { ...item, imageSrc: response.items[0].imageSrc};
  }));

  return updatedItems;
});
