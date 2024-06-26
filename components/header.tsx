import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import UserMenu from "./user-menu";
import MobileNav from "./mobile-nav";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="container h-16 flex items-center border-b justify-between gap-2 p-3">
      <MobileNav />
      <Button variant="ghost" className="w-[200px] relative ">
        <Image
          src="/logo/logo.svg"
          alt=""
          className="object-cover object-center"
          fill
          priority
        />
        <Link href="/">
          <span className="absolute inset-0"></span>
        </Link>
      </Button>
      <div className="hidden lg:block">
        <Nav />
      </div>
      <span className="flex-1"></span>
      <ModeToggle />
      {/* <div className="hidden lg:block">
      </div> */}
      <UserMenu />
    </header>
  );
}
