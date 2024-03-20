# [服务端渲染](https://blog.csdn.net/qq_26884891/article/details/129833954)

服务端渲染优点：在服务器中将 react 组件首次渲染完成，传输给客户端的是一个完整的 html 页面（包括已在页面中填充数据）,可以极大提高首屏加载速度。  
缺点：  
（1）（是没有状态，只有数据）因为服务端不能传输 js 对象，如果首屏加载完成后，再与后端交互，刷新数据的化可能会导致页面状态丢失异常  
（2）不能在首次渲染时使用浏览器 API、组件 state,hooks,点击事件等等

1. 约定式框架 [官方文档](https://nextjs.frontendx.cn/docs/#静态文件服务（如图像）)

- 静态生成时的模版文件，即页面在打包 build 时已经生成 html
- 动态生成，用户通过路由参数访问，每次访问都生成一个 html 页面

```
|- app 目录存放全局的一些组件
   |- page.tsx 会和pages/index.tsx冲突，两个保留一个就可以（默认首页）
|- pages 目录下文件自动生成对应名称的路由
  |- about.tsx 普通路由文件
  |- index.tsx 普通路由文件,首页
  |- [id].tsx 动态路由参数，例如路由 /posts/1 即可访问 post目录下[id]
  |-- \_app.tsx 约定为静态生成时的模版文件
  |- \_document.tsx 约定动态生成时为文件

```

2. 环境变量，根目录下创建.env.dev 文件

```
// NEXT_PUBLIC_ 的文件将被发送客户端时，
NEXT_PUBLIC_TEST_URL="https://www.baidu.com"
// 没有前缀的只能在node 环境中使用
PUBLIC_URL="localhost:8000"
```

3. antd-design 集成需要参考其官网，并且版本要对应上
   [NextJS 中使用 antd](https://ant-design.antgroup.com/docs/react/use-with-next-cn)

```
// package.json中
{

 "antd": "^5.15.3",
 "next": "13.4.7",
}
```

## [博客 next 文档合集](https://blog.csdn.net/qq_26884891/category_12304867.html)

## [博客 next 文档六](https://blog.csdn.net/qq_26884891/article/details/129880899)
