import ItemCard from "@/components/item-card";
import News from "@/components/news";
import SideBer from "@/components/side-ber";
import { getExternalLinks } from "@/lib/newt";
import ManualCard from "./components/manual-card";

export default function Page() {
  return (
    <div className="container p-0">
      <div className="min-h-dvh flex flex-col">
        <div className="flex flex-1">
          <SideBer />
          <div className="flex-1 bg-muted/30 p-3">
            <ManualCard />
          </div>
        </div>
      </div>
    </div>
  );
}
