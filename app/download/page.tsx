import SideBer from "@/components/side-ber";
import React from "react";
import DownloadContent from "./components/download-content";

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="container p-0">
      <div className="min-h-dvh flex flex-col">
        <div className="flex flex-1">
          <SideBer />
          <div className="flex-1 bg-muted/30">
            <DownloadContent params={{ id }} />
          </div>
        </div>
      </div>
    </div>
  );
}
