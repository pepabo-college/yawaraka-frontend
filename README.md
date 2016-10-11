# やわらかフロントエンド

ペパカレ（一期）向けフロントエンド座学教材詰め合わせ

## 最初にやること

### node.js の環境をセットアップするぞ

nodebrewをインストールし、任意のバージョンのnode.jsを利用できるようにする
（セットアップの手順などがインストール後に出るかもしれない）

```
brew install nodebrew
```

どのバージョンのnode.jsが出ているか確認する

```
nodebrew ls-remote

v6.0.0    v6.1.0    v6.2.0    v6.2.1    v6.2.2    v6.3.0    v6.3.1    v6.4.0
v6.5.0    
```

ひとまず、6.5.0を使いましょう

```
nodebrew install-binary v6.5.0
nodebrew use v6.5.0
```

### フロントエンドの「スタック」について確認する

* ねっしーさんの資料頼り...
* mizchiさんの [春からはじめるモダンJavaScript / ES2015](http://qiita.com/mizchi/items/3bbb3f466a3b5011b509) を秋に読む

### JavaScript/EcmaScript2015について確認する

* 前提としてJavaScriptをなんとなくかけてればOK、と思う
* こちらは、nodeschoolのチュートリアルがあるので一通りやりましょう
* [Count-to-6](https://github.com/domenic/count-to-6)

![screen capture](https://raw.githubusercontent.com/domenic/count-to-6/master/screenshot.png)

```
npm install -g count-to-6
count-to-6
```

* 後でudzuraさんの解答例もうｐしますが、公式にも回答は表示されます。だいたい僕の回答と違うので見比べてみてください...

### JavaScript自体についての確認

* [MDNを読むんだ。](https://developer.mozilla.org/ja/docs/Web/JavaScript)
* 変にGoogleしない方がいいかもしれません。

## その後

* 「教科書」のアプリを、 p. 35 `ToDoの更新機能を追加` の「直前」まで実装してください。
* 第3章のアプリに追加PRする形で、PRまで作成するところがゴール。

