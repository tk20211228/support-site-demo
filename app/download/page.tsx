import SideBer from "@/components/side-ber";
import React from "react";
import { getExternalLinks } from "@/lib/newt";
import ItemCard from "@/components/item-card";

export default async function Page() {
  const externalLink = await getExternalLinks();

  console.log("externalLink", externalLink);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {externalLink.map((link) => (
        <ItemCard
          key={link._id}
          linkName={link.linkName}
          url={link.url}
          image={link.image.src}
        />
      ))}
    </div>
  );
}
