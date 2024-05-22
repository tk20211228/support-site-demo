import { manualData } from "@/app/data/manuals";
import { news, newsData } from "@/app/data/news";
import NewsCard from "@/components/news-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManualCard() {
  return (
    <div className="space-y-2">
      {manualData.map((data) => (
        <Card key={data.id}>
          <div className="flex justify-center">
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
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
      ))}
    </div>
  );
}
