
一款基于 `TaroUI` 框架开发的多端 UI 组件库

## 特性

- 基于 `Taro` 开发 UI 组件
- 一套组件可以在 `微信小程序`，`支付宝小程序`，`百度小程序`，`H5` 多端适配运行（`ReactNative` 端暂不支持）
- 提供友好的 API，可灵活的使用组件

## 关于 Taro

Taro 是由 [凹凸实验室](https://aotu.io) 倾力打造的多端开发解决方案。现如今市面上端的形态多种多样，Web、ReactNative、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、RN等）运行的代码。

## 安装

需要安装 `Taro` 开发工具 `@tarojs/cli`，`Taro` 版本需要在 `1.0.0-beta.18` 以上

```bash
npm install -g @tarojs/cli
```

然后在项目中安装 Taro UI

```bash
npm install taro-ymui
```

## 使用

在代码中 `import` 需要的组件并按照文档说明使用

```js
import { AtButton } from 'taro-ymui'
```
