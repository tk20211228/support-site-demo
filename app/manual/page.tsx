import ItemCard from "@/components/item-card";
import SideBer from "@/components/side-ber";
import { getExternalLinks } from "@/lib/newt";

export default function Page() {
  return (
    <div className="container p-0">
      <div className="min-h-dvh flex flex-col">
        <div className="flex flex-1">
          <SideBer />
          <div className="flex-1 bg-muted/30">test</div>
        </div>
      </div>
    </div>
  );
}
