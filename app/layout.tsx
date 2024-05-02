import type { Metadata } from "next";
import "./globals.css";

// import { Inter } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/provider/theme-provider";
import SideBer from "@/components/side-ber";
import { cn } from "@/lib/utils";

import Footer from "../components/footer";

// const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* <body className={cn(inter.className, "min-h-dvh")}> */}
      <body className={cn(notoSansJP.className, "min-h-dvh")}>
        {/* <body className={cn(notoSansJP.className, "h-dvh flex flex-col")}> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}

          {/* <main className="flex flex-1"> */}
          {/* <SideBer /> */}
          {/* <div className="flex-1">{children}</div> */}
          {/* </main> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
