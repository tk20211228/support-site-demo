import ItemCard from "@/components/item-card";

export default function DownloadContent({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ItemCard
        href="/download"
        title="123456"
        tags={[
          { id: "1", label: "ライセンス不要" },
          { id: "2", label: "商業利用可能" },
        ]}
        image="/android-icon.svg"
      />
    </div>
  );
}
