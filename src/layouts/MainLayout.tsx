import { useTheme } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";
import * as Component from "../components";

type Props = {
  children: React.ReactNode;
  withNavbar?: boolean;
};

const MainLayout = ({ children, withNavbar = true }: Props) => {
  const { isDark } = useTheme();
  return (
    <>
      <main
        className={clsx("flex min-h-screen flex-col bg-gradient-to-b", {
          "bg-gradient-to-b from-[#0F1217] to-[#15162c]": isDark,
          "bg-gradient-to-b from-[#F5F5F5] to-[#F5F5F5]": !isDark,
        })}
      >
        {withNavbar && <Component.Navbar />}
        <div className="flex flex-grow flex-col items-center justify-center">
          {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout;
