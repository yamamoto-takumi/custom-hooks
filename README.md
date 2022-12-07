# リポジトリについて
このリポジトリはReactのカスタムフックをメモしておく用です

## useWebSocket
WebSocketを利用するためのクライアントを取得できます

** 利用例
```
const url = 'ws://localhost:3000'
const socket = useWebSocket(url);
```

## useWindowSize
ウィンドウのwidthとheightを取得できます
※clientWidth, clientHeightの取得をしたい場合は適宜変更必要あり

** 利用例
```
const [width, height] = useWindowSize();
```
