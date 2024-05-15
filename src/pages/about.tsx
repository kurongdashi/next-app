// 创建pages/about.tsx 文件即可使用/about 访问
// "use client"; //如果要使用点击事件，则必须是客户端组件，必须加上 use client
import Image from "next/image";
import { Button } from "antd";
import { useRouter } from "next/router";

const Index = ({ data, extra }: any) => {
  console.log("about extra=", extra);
  // NEXT_PUBLIC_ 开头的环境变量可以在客户端使用
  console.log("process.env", process.env["NEXT_PUBLIC_TEST_URL"]);
  const router = useRouter();
  const toOther = () => {
    router.push("/other");
  };
  return (
    <div>
      这里是about{" "}
      <Button type="primary" onClick={toOther}>
        按钮1
      </Button>
      <div>姓名：{data.name}</div>
      <div>体重：{data.weight}</div>
      <div>身高：{data.height}</div>
      {/* 将图片放在public目录下后，可直接 /xxx 使用 */}
      <Image src="/image1.jpg" width={200} height={200} alt={"风景"}></Image>
      {/* 图片的layout 属性必须搭配父盒子的 position: "relative" 使用*/}
      <div
        style={{
          position: "relative",
          width: "300px",
          height: "200px",
          marginTop: 20,
        }}
      >
        <Image src="/image2.jpg" alt={"风景2"} layout="fill"></Image>
      </div>
    </div>
  );
};
export default Index;
// 静态生成（推荐）就是用户访问的路由是固定的(不需要从路由上获取参数)，就可以在build时，生成html
export async function getStaticProps() {
  console.log("process.env.PUBLIC_URL", process.env["PUBLIC_URL"]);
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
}
