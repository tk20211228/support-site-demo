import { Tag } from "@/app/types/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExternalLink } from "../app/types/external-link";
import { ArrowUpRight } from "lucide-react";

export default function ItemCard({
  linkName,
  url,
  image,
}: {
  linkName: string;
  url: string;
  image: string;
}) {
  return (
    <div className="aspect-video hover:shadow-lg transition duration-500 p-4 gap-4 border rounded-md shadow-sm bg-card relative">
      <div className="aspect-video overflow-hidden relative border mb-2 rounded">
        <Image objectFit="cover" fill src={image} alt="" />
      </div>
      <h2 className="text-lg font-semibold">
        <Link href={url} target="_blank">
          {linkName}
          <span className="absolute inset-0"></span>
          <ArrowUpRight size={16} className="inline" />
        </Link>
      </h2>
      <div className="flex relative flex-wrap mt-2 gap-2"></div>
    </div>
  );
}
