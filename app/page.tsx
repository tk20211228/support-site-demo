import Link from "next/link";
import { topItems } from "./data/top-items";
import { BookText, Download, MessageCircleQuestion } from "lucide-react";
import { Separator } from "@/components/ui/separator";

import News from "../components/news";
export default function Home() {
  return (
    <main className="container px-3 py-6">
      <div className="grid grid-cols-3 gap-3">
        {topItems.map((_, i) => (
          <div
            key={i}
            className="border relative p-2 rounded-lg hover:shadow-lg transition duration-500"
          >
            <div className=" flex items-center justify-center aspect-video bg-muted border rounded-lg mb-2 px-1 py-2">
              {_.label === "ダウンロード" && <Download size={100}></Download>}
              {_.label === "マニュアル" && <BookText size={100}></BookText>}
              {_.label === "Q & A" && (
                <MessageCircleQuestion size={100}></MessageCircleQuestion>
              )}
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
