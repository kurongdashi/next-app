const Index = ({ data, time }: any) => {
  // console.log("posts data=", data);
  console.log("posts time=", time);
  data = data || {};
  return (
    <div>
      这里是服务器静态渲染页面
      <div>姓名：{data.name}</div>
      <div>体重：{data.weight}</div>
      <div>身高：{data.height}</div>
    </div>
  );
};

//1、 如果使用getStaticProps则必须搭配 getStaticPaths用于预估会有那几种路由参数将对应参数的页面在build时生成
export async function getStaticPaths() {
  return {
    paths: [1, 2, 3, 4].map((id) => ({ params: { id: id + "" } })),
    // blocking 当参数超出预估时，会自动走getServerSideProps 的逻辑即 服务端动态生成页面
    // false:当参数超出预估时,提示404
    // true:当参数超出预估时,直接throw error
    fallback: true,
  };
}
// getStaticProps在服务端执行
export async function getStaticProps(context: any) {
  const { id } = context.params;
  console.log("getStaticProps build 时调用 ");
  // https://pokeapi.co/api/v2/pokemon/132
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(
    (res) => res.json()
  );

  // 通过 这样返回，上面组件在构建时就能接受到数据
  return {
    props: {
      data: data || {},
      time: Date.now(),
    },
  };
}
export default Index;
