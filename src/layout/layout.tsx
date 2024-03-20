// 定义公共布局文件,next 默认支持scss 需要安装 yarn add sass
import style from "./layout.module.scss";
const Index = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={style["layout"]}>
      <div className={style["title"]}>layout 公共布局</div>
      <div className={style["children"]}>{children}</div>
    </div>
  );
};
export default Index;
