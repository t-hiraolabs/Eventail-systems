# eventail systems 公式サイト 仕様書

## 1. 概要

| 項目 | 内容 |
|------|------|
| サイト名 | eventail systems（エヴァンタイユ システムズ） |
| 種別 | コーポレートサイト（1ページ / LP構成） |
| 対象 | ホームページ制作・アプリ開発・システム開発を行う個人事業 |
| 拠点 | 愛媛県今治市 |
| URL | Vercel（本番URL）／ 独自ドメイン取得予定 |
| リポジトリ | `t-hiraolabs/Eventail-systems`（GitHub） |
| 公開ディレクトリ | `docs/` |
| ホスティング | Vercel（自動デプロイ：`main`ブランチ push 時） |

---

## 2. 技術構成

| 項目 | 使用技術 |
|------|---------|
| マークアップ | HTML5（静的、フレームワーク不使用） |
| スタイル | CSS3（`assets/css/style.css`） |
| スクリプト | Vanilla JavaScript（`assets/js/main.js`） |
| フォント | Google Fonts（Cormorant Garamond / Inter / Shippori Mincho / Zen Kaku Gothic New） |
| アイコン画像 | PNG（favicon, apple-touch-icon, PWA icon 192/512） |
| PWA対応 | `site.webmanifest` 設置済み |
| アクセス解析 | Google Analytics（GA4） 測定ID: `G-PSPBCJ99X8` |
| SEO | メタタグ、geoタグ、JSON-LD構造化データ（ProfessionalService） |

---

## 3. ディレクトリ構成

```
docs/
├── index.html
├── site.webmanifest
├── favicon.ico
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo.png          # メインロゴ（透過）
│       ├── logo-sm.png       # ヘッダー用ロゴ（透過）
│       └── icons/
│           ├── favicon.ico
│           ├── favicon-32.png
│           ├── apple-touch-icon.png
│           ├── icon-192.png
│           └── icon-512.png
```

---

## 4. ページ構成（セクション）

| # | セクションID | 内容 |
|---|------------|------|
| 1 | ヘッダー | ロゴ、ナビゲーション（サービス／強み／制作の流れ／料金／お問い合わせ）、無料相談ボタン、ハンバーガーメニュー（モバイル） |
| 2 | `#top`（Hero） | キャッチコピー、リード文、CTAボタン、装飾リングアニメーション |
| 3 | `#services` | サービス紹介：ホームページ制作／アプリ開発／システム開発（3カラム） |
| 4 | `#why` | 選ばれる理由：4項目（一気通貫／適正規模／継続伴走／技術の幅） |
| 5 | `#flow` | 制作の流れ：4ステップ（ヒアリング→提案・見積り→設計開発→納品運用） |
| 6 | `#pricing` | 料金プラン：Web ¥5万〜／App ¥20万〜／System ¥10万〜 |
| 7 | `#works`（実績） | **未公開**（HTMLコメントアウトで無効化中。実績が揃い次第有効化） |
| 8 | `#contact` | 問い合わせフォーム＋連絡先情報（メール／対応エリア／対応時間／SNS） |
| 9 | フッター | サイトマップ、事業者情報、SNSリンク、コピーライト |

---

## 5. 主要コンテンツ

### キャッチコピー
```
考えをかたちに。仕組みを動かす。
あなたのアイデア、ひろげてみませんか。
```

### リード文
> eventail systems（エヴァンタイユ システムズ）は、愛媛県今治市を拠点に、要件のヒアリングから設計・開発・運用までを一気通貫で手がける個人事業です。大きな会社では零れ落ちる「ちょうどいい規模」のものづくりを得意とし、オンラインで全国対応しています。

### サービス一覧
| サービス | 内容例 |
|---------|--------|
| ホームページ制作 | コーポレート／店舗サイト、LP、ポートフォリオ・採用ページ、CMS構築 |
| アプリ開発 | iOS／Androidアプリ、業務効率化アプリ、生成AI連携、Webアプリ・PWA |
| システム開発 | 業務・在庫・顧客管理システム、Excel／VBA自動化、API連携、帳票出力 |

### 料金プラン（下限価格表示）
| プラン | 価格 | 備考 |
|--------|------|------|
| ホームページ | ¥5万円〜 | ページ数・規模に応じて見積り |
| アプリ開発 | ¥20万円〜 | 機能・プラットフォームに応じて見積り |
| システム開発 | ¥10万円〜 | Excel/VBA簡易自動化は数千円〜対応可 |

---

## 6. 連絡先・事業者情報

| 項目 | 内容 |
|------|------|
| 屋号 | eventail systems |
| 代表 | 平尾 大雅 |
| 所在地 | 愛媛県今治市 |
| 対応エリア | オンライン全国対応／愛媛県（今治市・松山市 ほか）対面可 |
| Email | hiraolabs@gmail.com |
| X | https://x.com/EventailSystems |
| Instagram | https://www.instagram.com/eventail.systems/ |

### 表記ルール

| 用途 | 表記 |
|------|------|
| サイト内（デザイン表記：ロゴ・見出し・構造化データ等） | `eventail systems`（小文字） |
| 契約書・請求書などの正式文書 | `Eventail Systems`（先頭大文字） |

---

## 7. お問い合わせフォーム仕様

| 項目 | 種別 | 必須 |
|------|------|------|
| お名前 | テキスト | ○ |
| 会社・屋号 | テキスト | - |
| メールアドレス | メール | ○ |
| ご相談の種別 | セレクト（HP／アプリ／システム／その他） | - |
| ご予算 | セレクト（未定〜50万円〜の5段階） | - |
| 希望納期 | テキスト | - |
| ご相談内容 | テキストエリア | ○ |

**送信方式**：現状は `mailto` によるメールソフト起動方式（`assets/js/main.js`）。
外部フォームサービス（Formspree / Googleフォーム等）への差し替えも想定しコメント記載あり。

> **要対応**：`main.js` 内の送信先メールアドレスがプレースホルダー（`your-email@example.com`）のまま。実アドレスへの変更が必要。

---

## 8. SEO対策（実装済み）

- タイトル・メタディスクリプションに地域キーワード（愛媛・今治）を含む
- `geo.region`（JP-38）／`geo.placename`（今治市）メタタグ
- JSON-LD構造化データ（`ProfessionalService`）：所在地・対応エリア・対応分野・SNSリンクを記載
- レスポンシブ対応（PC／スマホ）
- Google Fonts の `preconnect` によるパフォーマンス最適化

### 未実装（独自ドメイン取得後に対応予定）
- canonical タグ／OGPタグ（og:url, og:image 等）
- JSON-LD への `url` フィールド追加
- `sitemap.xml` / `robots.txt`
- Google Search Console 登録・サイトマップ送信

---

## 9. アクセス解析

- **Google Analytics（GA4）**：測定ID `G-PSPBCJ99X8` を `<head>` に実装済み
- Microsoft Clarity：未導入（導入検討中）

---

## 10. PWA対応

`site.webmanifest` にて以下を設定：

| 項目 | 値 |
|------|-----|
| name | eventail systems |
| short_name | eventail |
| description | ホームページ制作・アプリ開発・システム開発 |
| start_url / scope | `.`（相対パス。Vercel/GitHub Pages 両対応） |
| display | standalone |
| background_color / theme_color | `#0a0a0b` |
| icons | 192×192, 512×512 PNG |

---

## 11. アニメーション・UI仕様

- Hero背景の装飾リング：CSSアニメーション（回転）、`z-index:0` で最背面固定
- スクロール連動の要素フェードイン（`reveal`クラス、Intersection Observer）
- ヘッダー：スクロール時に状態変化（背景等）
- モバイルナビ：ハンバーガーメニュー、`z-index:200`（ヘッダーより前面）
- モバイル版 `#flow`：縦タイムライン表示（ドット＋接続線）

---

## 12. 既知の残タスク

| # | 内容 | 優先度 |
|---|------|--------|
| 1 | `main.js` の問い合わせ送信先メールアドレスを実アドレスに変更 | 高 |
| 2 | 対応時間の記載（現在プレースホルダー `【平日 10:00-19:00】` の確定要否確認 | 中 |
| 3 | 独自ドメイン取得後：OGP・canonical・sitemap・Search Console対応 | ドメイン取得後 |
| 4 | 実績セクション（`#works`）：制作実績が揃い次第、コメントアウト解除して公開 | 実績次第 |
| 5 | インボイス登録番号の記載（フッター内コメントアウト箇所あり） | 課税事業者化後 |

---

## 13. 運用・保守体制

| 項目 | 内容 |
|------|------|
| ソースコード管理 | GitHub（`t-hiraolabs/Eventail-systems`） |
| デプロイ | Vercel（`main`ブランチへのpushで自動デプロイ） |
| 開発環境 | ローカルPC＋VS Code（Gitクローン済み） |
