import { News, NewsTag } from "../types/news";

export const news: NewsTag[] = [
  {
    id: "notice",
    title: "お知らせ",
  },
  {
    id: "release-notes",
    title: "リリースノート",
  },
];

export const newsData: News[] = [
  {
    id: "1",
    title: "チャットサポート休業のお知らせ",
    content: "4月30日(火)〜5月2日(木)のチャットサポートはお休みとなります",
    tag: [
      { id: "1", title: "お知らせ" },
      { id: "2", title: "チャットサポート" },
      { id: "3", title: "休業" },
    ],
  },
  {
    id: "2",
    title: "コンテンツにデフォルト値を設定できるようになりました",
    content:
      "コンテンツにデフォルト値を設定できるようになりました。15種類のデフォルトフィールドタイプとカスタムフィールドタイプが対象です。",
    tag: [
      { id: "1", title: "お知らせ" },
      { id: "2", title: "コンテンツ" },
      { id: "3", title: "コンテンツ" },
    ],
  },
  {
    id: "3",
    title: "コンテンツ作成日に任意の日時を設定できるようになりました",
    content:
      "Newtのコンテンツ編集画面で、コンテンツの「作成日」と「最初の公開日」を変更できるようになりました。",
    tag: [{ id: "1", title: "お知らせ" }],
  },
];

export const releaseData: News[] = [
  {
    id: "1",
    title: "リリースノート一覧",
    content: "新機能を追加しました。",
    tag: [{ id: "1", title: "リリースノート" }],
  },
  {
    id: "2",
    title: "システムの更新",
    content: "本メンテナンスにて、サーバ証明書を更新いたしました。",
    tag: [{ id: "1", title: "システムの更新" }],
  },
  {
    id: "3",
    title: "商標変更におけるコンソール、エージェント更新手順書の追記",
    content:
      "商標変更のためのコンソール、各エージェントの更新手順書につきまして、アプリが更新されたことを確認する方法を追記いたしました。",
    tag: [{ id: "1", title: "商標変更" }],
  },
];
