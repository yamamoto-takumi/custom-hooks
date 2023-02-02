# リポジトリについて
このリポジトリはReactのカスタムフックをメモしておく用です

## useWebSocket
WebSocketを利用するためのクライアントを取得できます

** 利用例
```
const url = 'ws://localhost:3000'
const socket = useWebSocket(url);
```

*** TBD
Websocketが切れたときに再接続する仕組みがないため追加したい

onclose処理だけあらかじめ設定する？
onclose処理の上書きができるか？
urlと一緒にリトライ処理のフラグを渡して制御できるようにする？

## useWindowSize
ウィンドウのwidthとheightを取得できます
※clientWidth, clientHeightの取得をしたい場合は適宜変更必要あり

** 利用例
```
const [width, height] = useWindowSize();
```
