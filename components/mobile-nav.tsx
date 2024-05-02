import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TAGS } from "@/lib/tags";
import { Menu } from "lucide-react";
import Link from "next/link";
export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="lg:hidden" size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-2">
          {TAGS.map((tag) => (
            <Button
              variant="ghost"
              key={tag.id}
              className="justify-start"
              asChild
            >
              <Link href={`download/${tag.id}`}>{tag.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
