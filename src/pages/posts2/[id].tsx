// import img from "@/../public/image1.jpg";
const Index = ({ data, time }: any) => {
  // console.log("posts data=", data);
  console.log("posts time=", time);
  // NEXT_PUBLIC_ 开头的环境变量可以在客户端使用
  console.log("posts2 process.env", process.env["NEXT_PUBLIC_TEST_URL"]);
  data = data || {};
  return (
    <div>
      这里是服务器动态渲染页面
      <div>姓名：{data.name}</div>
      <div>体重：{data.weight}</div>
      <div>身高：{data.height}</div>
    </div>
  );
};
//

//2、 如果使用 getServerSideProps 服务端动态生成：用户在访问路由时带有参数，每次访问都生成一个html
// getServerSideProps在服务端执行
export async function getServerSideProps(context: any) {
  const { id } = context.params;
  console.log("getServerSideProps 访问时调用");

  // https://pokeapi.co/api/v2/pokemon/132
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
    (res) => res.json()
  );

  // 通过 这样返回，上面组件在构建时就能接受到数据
  return {
    props: {
      data,
      time: Date.now(),
    },
  };
}
export default Index;
