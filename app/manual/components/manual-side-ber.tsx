import { ManualTags, TAGS } from "@/lib/tags";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export default function ManualSideBer() {
  return (
    <div className="hidden lg:block w-50 border-r p-4">
      <div className="flex flex-col gap-2">
        {ManualTags.map((tag) => (
          <Button variant="ghost" className="justify-start" key={tag.id}>
            <Link href={`/manual/${tag.id}`}>{tag.label}</Link>
            {/* <Link href={`/download`}>{tag.label}</Link> */}
          </Button>
        ))}
      </div>
    </div>
  );
}
