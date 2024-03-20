// 创建pages/about.tsx 文件即可使用/about 访问
// import Image from "next/image";

const Index = ({ data, extra }: any) => {
  console.log("about data=", extra);
  return (
    <div>
      这里是other页面
      <div>姓名：{data.name}</div>
      <div>体重：{data.weight}</div>
      <div>身高：{data.height}</div>
      {/* <Image src="./next.svg" width={400} height={400} /> */}
    </div>
  );
};
export default Index;
// 静态生成（推荐）就是用户访问的路由是固定的(不需要从路由上获取参数)，就可以在build时，生成html
export async function getStaticProps() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`).then((res) =>
    res.json()
  );
  return {
    props: {
      data,
    },
  };
}
