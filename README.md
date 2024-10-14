# Development environment

- node.js : v16.18.1
- npm : v10.8.2

# 個人的補足メモ

React の場合、ビルド時に情報が集約され階層がずれるらしく、通常のパス指定は不可
そのため「import での画像読み込み」または「public フォルダへの配置」が必要とのこと
また、public フォルダの中身はビルド時にルートディレクトリに配置されるらしい
参照 : https://qiita.com/only/items/311a0dec256ecfd5d8c9
