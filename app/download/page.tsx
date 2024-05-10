import { getExternalLinks } from "@/lib/newt";
import ItemCard from "@/components/item-card";
import SideBer from "@/components/side-ber";

export default async function Page() {
  const externalLinks = await getExternalLinks();
  // console.log("externalLink", externalLinks);
  return (
    <div className="container p-0">
      <div className="min-h-dvh flex flex-col">
        <div className="flex flex-1">
          <SideBer />
          <div className="flex-1 bg-muted/30">
            <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {externalLinks.map((externalLink) => (
                <ItemCard
                  key={externalLink._id}
                  linkName={externalLink.linkName}
                  url={externalLink.url}
                  image={externalLink.imageSrc}
                  explainLink={externalLink.explainLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
