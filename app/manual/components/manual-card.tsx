import { Search } from "lucide-react";

import { news, newsData, releaseData } from "@/app/data/news";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "@/components/news-card";

export default function ManualCard() {
  return (
    <Tabs defaultValue="notice" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="quickManual">クイックマニュアル</TabsTrigger>
        <TabsTrigger value="operationManual">操作マニュアル</TabsTrigger>{" "}
        <TabsTrigger value="manualByFunction">機能別利用の手引き</TabsTrigger>{" "}
        <TabsTrigger value="systemCommonManual">システム共通資料</TabsTrigger>
      </TabsList>
      {news.map((newsItem) => (
        <TabsContent key={newsItem.id} value={newsItem.id}>
          <Card>
            <div className="flex justify-center">
              <CardHeader>
                <CardTitle>{newsItem.title}</CardTitle>
              </CardHeader>
            </div>
            <div className="flex justify-center">
              <CardContent className="space-y-2 lg:w-1/2">
                <ul className="space-y-2">
                  {newsData.map((item) => (
                    <NewsCard
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      content={item.content}
                      tag={item.tag}
                    />
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}
