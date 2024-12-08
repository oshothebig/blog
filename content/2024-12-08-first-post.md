---
title: ブログを作りました
---

# なぜ？
`.dev` ドメインを取得したのに何も使っていなかったのと、 Static Site Generator (SSG) を何か使ってみたかったのと、Cloudflare Pages を使ってみたかったのでブログを作りました。

# Zola
SSG といえば Hugo を選んでおくのが定石だと思うのですが、メジャーすぎて面白く無さそうだと思ってしまい、何か別のものを探し始めました。最近は Gatsby や Astro なんかの JS ベースのものの勢いがありそうですが、 Hugo っぽくシングルバイナリでシンプルに使えるのと、Rust 製のプロダクトを推したい気持ちがあって [Zola](https://www.getzola.org/) を使うことにしました。

コミュニティやエコシステムは Hugo の方が圧倒的に大きく、Hugo を選んでおいた方が無難でハマりにくいと思いますが、[Zola のドキュメント](https://www.getzola.org/documentation/)をざっと見てみて少なくともすぐに問題になることはないだろうと考えました。もし、問題が何かあってもその時に考えればよいという楽観的な選択です。

# テーマ
Zola のテーマは[ここに一覧](https://www.getzola.org/themes/)があります。当然、 Hugo より圧倒的に少ないのですが、 [apollo](https://www.getzola.org/themes/) が良さそうだったのでこれで始めることにしました。

まだ、カスタマイズ性とか設定とかがよく分かっていないので細かく良くない点があるかも知れないですが、順次気がついたら直していく方針で進めます。システムよりも内容を書くことが重要だと思いますので。

# Cloudflare Pages
Cloudflare Pages で Zola を使う方法はなんと Cloudflare Pages の公式ドキュメント ([Products > Pages > Framework guides > Zola](https://developers.cloudflare.com/pages/framework-guides/deploy-a-zola-site/))に説明があります。公式で対応しているので GitHub Actions のワークフローを書く必要もなく手っ取り早く始めるのはとても楽です。

ドメインは管理を Cloudflare にこの際に移してしまう選択肢もあるのですが、 Yak shaving 的なので後回しにしました。そのため、カスタムドメインはサブドメインを使って設定しています。
