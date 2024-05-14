"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Download } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "クイックマニュアル",
    href: "/manual",
    description:
      "クイックマニュアルには、簡単な操作方法を説明したマニュアルがあります。",
  },
  {
    title: "操作マニュアル",
    href: "/manual",
    description:
      "操作マニュアルには、詳細な操作方法を説明したマニュアルがあります。",
  },
  {
    title: "機能別マニュアル",
    href: "/manual",
    description:
      "機能別マニュアルには、各機能の使い方を説明したマニュアルがあります。例えば、オプションアプリ、DEP、VPPなど。",
  },
  {
    title: "システム共通資料",
    href: "/manual",
    description:
      "システム共通資料には、利用規約、ネットワーク要件、MDM証明書登録などを説明したマニュアルがあります。",
  },
];

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ダウンロード</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-5">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/download"
                  >
                    <Download className="h-6 w-6" />
                    <div className="mb-2 mt-2 text-lg font-medium">
                      ダウンロード 一覧
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      コンソールやAgentのダウンロード一覧
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/download?q=console" title="コンソール">
                コンソールアプリのダウンロードページに移動します。
              </ListItem>
              <ListItem href="/download" title="Android">
                Android用のアプリをダウンロードするページに移動します。
              </ListItem>
              <ListItem href="/download" title="iOS">
                iOS用のアプリをダウンロードするページに移動します。
              </ListItem>
              <ListItem href="/download" title="macOS">
                macOS用のアプリをダウンロードするページに移動します。
              </ListItem>
              <ListItem href="/download" title="Window">
                Windows用のアプリをダウンロードするページに移動します。
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>マニュアル</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              よくある質問
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              お問い合わせ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
