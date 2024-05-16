import ManualCard from "./components/manual-card";
import ManualSideBer from "./components/manual-side-ber";

export default function Page() {
  return (
    <div className="container p-0">
      <div className="min-h-dvh flex flex-col">
        <div className="flex flex-1">
          <ManualSideBer />
          <div className="flex-1 bg-muted/30 p-3">
            <ManualCard />
          </div>
        </div>
      </div>
    </div>
  );
}
