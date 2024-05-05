export default function Footer() {
  return (
    <footer className="sticky top-full items-center justify-center border-t container">
      <div className="grid lg:grid-cols-3 gap-6 py-8 justify-items-center">
        <div>
          <h1 className="text-lg font-semibold">About</h1>
          <p className="text-sm">ご利用ガイド</p>
          <p className="text-sm">利用事例</p>
          <p className="text-sm">紹介キャンペーン</p>
          <p className="text-sm">お知らせ</p>
          <p className="text-sm">ミッションとビジョン</p>
          <p className="text-sm">お問い合わせ</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Legal</h1>
          <p className="text-sm">利用規約</p>
          <p className="text-sm">プライバシーポリシー</p>
          <p className="text-sm">test</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Links</h1>
          <p className="text-sm">ダウンロード</p>
          <p className="text-sm">マニュアル</p>
          <p className="text-sm">動作確認済み一覧</p>
        </div>
      </div>
      <div className="flex justify-center text-sm text-muted-foreground p-4">
        &copy; Zodiac
      </div>
    </footer>
  );
}
