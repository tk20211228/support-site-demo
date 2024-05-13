import { News } from "@/app/types/news";
import { format } from "date-fns";
import Link from "next/link";

export default function NewsCard({ id, title, content, tag }: News) {
  return (
    <li
      className="rounded-lg border p-4  hover:bg-accent hover:shadow-md duration-500 relative"
      key={id}
    >
      <h3 className="text-lg font-bold">
        <Link href="/">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h3>

      <p>{content}</p>

      <div className="flex relative Z-10 flex-wrap mt-2 gap-2 justify-between">
        {tag?.map((tag) => (
          <Link
            key={tag.id}
            href={`/${tag.id}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-sm px-1 py-0.5"
          >
            {tag.title}
          </Link>
        ))}
        <span className="flex-1"></span>
        <span className="flex-1"></span>
        <time className="text-sm text-muted-foreground px-1 py-0.5">
          {format(new Date(), "yyyy/MM/dd")}
        </time>
      </div>
    </li>
  );
}
