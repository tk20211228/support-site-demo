import { format } from "date-fns";
import { Search } from "lucide-react";

import { news, newsData, releaseData } from "@/app/data/news";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from "./news-card";

export default function News() {
  return (
    <Tabs defaultValue="notice" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="notice">お知らせ</TabsTrigger>
        <TabsTrigger value="release-notes">リリースノート</TabsTrigger>
      </TabsList>

      {news.map((item) => (
        <TabsContent key={item.id} value={item.id}>
          <Card>
            <div className="flex justify-center">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
            </div>
            <div className="flex justify-center">
              <CardContent className="space-y-2 lg:w-1/2">
                <div className="relative">
                  <Search
                    className="absolute left-2 top-2.5 text-muted-foreground"
                    size={16}
                  />
                  <Input
                    className="flex h-9 shadow-sm focus-visible:ring-1 pl-8"
                    placeholder="Search"
                  ></Input>
                </div>
                <Button>検索</Button>
                <ul className="space-y-2">
                  {item.title === "お知らせ" &&
                    newsData.map((item) => (
                      <NewsCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                      />
                    ))}
                  {item.title === "リリースノート" &&
                    releaseData.map((item) => (
                      <NewsCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
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
