import SideBer from "@/components/side-ber";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container p-0">
      <div className="min-h-dvh flex flex-col">
        <div className="flex flex-1">
          <SideBer />
          <div className="flex-1 bg-muted/30">
            {children}
            {/* コンポーネントにexternalLinkを渡す */}
            {/* <DownloadContent externalLink={externalLink} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
