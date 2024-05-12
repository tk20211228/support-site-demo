import { news, newsData, releaseData } from "@/app/data/news";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { format } from "date-fns";

export default function NewsCard({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) {
  return (
    <li className="rounded-lg border p-4 hover:bg-accent" key={id}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{content}</p>
      <time className="text-sm text-muted-foreground">
        {format(new Date(), "yyyy/MM/dd")}
      </time>
    </li>
  );
}
