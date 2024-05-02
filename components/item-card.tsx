import { Tag } from "@/app/types/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemCard({
  href,
  title,
  tags,
  image,
}: {
  href: string;
  title: string;
  tags: Tag[];
  image: string;
}) {
  return (
    <div className="aspect-video hover:shadow-lg transition duration-500 p-4 gap-4 border rounded-md shadow-sm bg-card relative">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded">
        <Image objectFit="cover" fill src={image} alt="" />
      </div>
      <h2 className="text-lg font-semibold">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
          {/* <ArrowUpRight size={16} className="inline" /> */}
        </Link>
      </h2>
      <div className="flex relative z-10 flex-wrap mt-2 gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/${tag.id}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded-md text-xs px-1.5 py-1"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
