# 教科書副読本

## `.gitignore` について

node.js 固有のgitignore設定を追記すべきな事と、 `bundle.js` をバージョン管理の対象から外すと良い

```
app/assets/javascripts/bundle.js
node_modules/
```

refs: https://www.gitignore.io/api/node

## `module.exports =` と `export (default)` どれがいいの？

* Default exports が基本好まれるし、使う側にも書く側にもメリットがある。
* see: http://www.2ality.com/2014/09/es6-modules-final.html
  * 3. An overview of the ES6 module syntax からに詳しい

## `PATCH /tasks/:id` のレスポンスは何を返すべき？

* 更新されたリソースだけ返すべき？
* 更新されたものを含む全リソースを返すべき？
* see: https://tools.ietf.org/html/rfc5789#section-2.1
  * 全リソースか、更新されたリソースか解釈が分かれそう

## Source Map を使う

* bundle後のJavaScriptのデバッグには必携。
* browserify系では `--debug` で自動生成する。
* build ではつけない、 watch(開発時) はつける。

```json
  "scripts": {
    "build": "browserify app/assets/javascripts/app.js -t babelify -o app/assets/javascripts/bundle.js -v",
    "watch": "watchify app/assets/javascripts/app.js -t babelify -o app/assets/javascripts/bundle.js -v --debug"
  },
```

* なんかFireFox(49.0.1)でうまく動かなかったけど、プラグイン等が必要かもしれず...
