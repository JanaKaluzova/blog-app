import { PropsWithChildren } from "react";
import LayoutCSS from "./Layout.module.scss";
import { Menu } from "./menu";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={LayoutCSS.container}>
      <Menu />
      <main>{children}</main>
    </div>
  );
};
