
This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
#### 开发步骤
- npm安装 网上都有教程，按照教程来，装稳定版本

- 在vscode中将wzzs文件夹打开
- 点击![alt text](image.png)里面的terminal 
- 出现终端后，输入：npm install 
- 报错的话看看路径是不是出问题了，这个过程解决不了可以直接截图问我
- 然后输入 npm run dev
- 出现一个小网址，按住ctrl 鼠标单击那个网址，就会出现网站本地运行的结果

1. 任务一：图标修改
    - 打开CultureShow.vue，里面的文物和非遗两个栏目插入icon，具体可以看网上教程
2. 任务二：文物内容填充
    - wenwu1.vue是我已经填充好的内容，复制粘贴到wenwu2.vue feiyi1.vue feiyi2.vue中，然后对具体内容进行修改，可以的话插入一些echart的可视化图表，主要的语言是ts,vue中一般是单独写一个ts文档，然后在对应页面的vue文件中用import引入，具体怎么做可以看B站教程
3. 任务三：首页填充
    - 打开Home.vue文件，按照html的语言将其中的内容全部替换
4. 任务四：跳转逻辑
    - wenwu1.vue中有个按钮，修改这个文件和 player/App.vue中的代码，实现以下功能，点击按钮后向跳转后的界面传递一个参数，不同按钮传递不同的字符串，使得viewer.addSplatScene('src/data/point_cloud.ply', {中的路径对应不同文件，文件命名格式全都是‘xxx.ply’路径全都是'src/data/XXX.ply'，5.7或者5.8我会把其它的ply文件命名好发群里
    