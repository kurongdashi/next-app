import React from "react";
import { Button } from "antd";
import { useRouter } from "next/router";

const Index = ({ data, extra }: any) => {
  const router = useRouter();
  const toOther = () => {
    router.push("/other");
  };
  return (
    <div>
      {/* 如果要使用点击事件，则必须是客户端组件 */}
      <div>
        <Button type="primary" onClick={toOther}>
          按钮1
        </Button>{" "}
      </div>
      <div>这里是首页面</div>;
    </div>
  );
};
export default Index;
