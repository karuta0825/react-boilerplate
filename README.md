### ボイラープレート

React開発用のボイラープレートです。

### 機能
開発を楽にするために、以下の機能を設定してます
- CSS Module  
- Hot Module Replacement(HMR)  
- LiveReload  
- flow  
- ESLint  

以下HMRを使った開発イメージ  
![HMRを使った開発作業のイメージ](https://user-images.githubusercontent.com/9998881/45594307-79f2e680-b9d3-11e8-9e72-2e5f2d4ba6a4.gif)

各機能の設定等については、[ブログ](http://karuta-kayituka.hatenablog.com/)にまとめました。

### 使い方
srcディレクトリにファイルを作成してください。  
ビルドするとdistディレクトリに本番コードが生成されます  

`npm start`でHMRでの開発  
`npm start:l`でLiveReloadによる開発  
`npm build`でビルド  
