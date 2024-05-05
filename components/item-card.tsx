import { ExternalLinkImage, imageSrc } from "@/app/types/external-link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  linkName,
  url,
  image,
  explainLink,
}: {
  linkName: string;
  url: string;
  image: imageSrc;
  explainLink: string;
}) {
  return (
    <div className="flex hover:shadow-lg transition duration-500 p-3 gap-3 border rounded-md shadow-sm bg-card relative">
      <div className="flex-2 items-center justify-center">
        <div className="aspect-square overflow-hidden border-2 rounded-lg bg-muted relative">
          <Image
            width={80} // 画像の幅
            height={80} // 画像の高さ
            src={image.src}
            alt=""
            className="object-cover object-center p-2"
          />
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">
          <Link href={url} target="_blank">
            {linkName}
            <span className="absolute inset-0"></span>
            <ArrowUpRight size={16} className="inline" />
          </Link>
        </h2>
        <p className="text-xs text-muted-foreground">{explainLink}</p>
      </div>
    </div>
  );
}
