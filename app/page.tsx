import { BookText, Download, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import News from "../components/news";
import { topItems } from "./data/top-items";
import NewTab from "@/components/news-card";

export default function Home() {
  return (
    <main className="container px-3 py-6">
      <div className="grid grid-cols-3 gap-3">
        {topItems.map((_, i) => (
          <div key={i} className="relative group">
            <div className="border p-2 rounded-lg group-hover:shadow-lg transition duration-1000">
              <div className="flex items-center justify-center aspect-video bg-muted border rounded-lg mb-2">
                <div className="group-hover:scale-110 lg:group-hover:scale-150 duration-1000 p-2">
                  {_.label === "ダウンロード" && <Download size={70} />}
                  {_.label === "マニュアル" && <BookText size={70} />}
                  {_.label === "F A Q" && <MessageCircleQuestion size={70} />}
                </div>
              </div>
              <div className="text-center py-1">
                <h2 className="lg:text-2xl md:text-md text-sm font-bold">
                  {_.label}
                </h2>
                <p className="hidden md:block text-xs text-muted-foreground">
                  {_.content}
                </p>
              </div>
              <Link href={`${_.url}`} className="flex text-center">
                <span className="absolute inset-0"></span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="py-6">
        <Separator />
      </div>
      <div className="">
        <News />
      </div>
    </main>
  );
}
