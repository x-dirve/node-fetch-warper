# node-fetch 3.0 cjs 环境包装模块

> node-fetch from v3 is an ESM-only module - you are not able to import it with require().

就如 Node Fetch 自己的 README 里说的, 在 v3 之后是一个纯 ESM 模块，如果直接使用 `require` 去加载的话会报错

本包要要解决的是当前项目使用 v3 而本身的项目又暂时无法全转成 module 模式且项目本身的工具无法单独处理 cjs 加载 esm 的 import 语句的时情况

## 使用

1. 将 `@x-drive/node-fetch-warper` 加入到项目生产依赖中
1. 确保项目中已有 `node-fetch` v3 版本
1. 使用 `@x-drive/node-fetch-warper` 提供的方法加载 `node-fetch`
    ```js
    import { getFetch } from "@x-drive/node-fetch-warper";

    // 在需要使用的地方
    const fetch = await getFetch();
    const re = await fetch("/url");
    ```
