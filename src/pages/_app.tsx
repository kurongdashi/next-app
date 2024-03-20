import Link from "next/link";
import { AppProps } from "next/app";
// 在此导入的样式全局有效
import "./_app.css";
import Layout from "../layout/layout";
import withTheme from "@/theme";
// _app 文件约定为全局入口文件,
// Component 就是pages下的其他页面组件，pageProps为其参数
const Index = ({ Component, pageProps }: AppProps) => {
  return withTheme(
    <>
      <div className="header">
        <span>NextJS 使用</span>
        {/* link中 prefetch 参数默认为true，即会自动加在链接对应的页面,为false时只能阻止在视口viewport 自动加载，但是鼠标悬停时，还是会预加载 */}
        <Link href="/about" className="href" prefetch={false}>
          about
        </Link>
        <Link
          href={{ pathname: "/posts/[id]", query: { id: 2 } }}
          className="href"
        >
          posts/1
        </Link>
        <Link
          href={{ pathname: "/posts2/[id]", query: { id: 10 } }}
          className="href"
        >
          posts2/10
        </Link>
      </div>
      <Layout>
        {/* page下的其他页面会被渲染为Component */}
        <Component {...pageProps} extra="额外的数据" />
      </Layout>
    </>
  );
};
export default Index;
