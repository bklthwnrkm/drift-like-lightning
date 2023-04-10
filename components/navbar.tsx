import React, { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs/.";
import { ArrowRightIcon, MenuIcon } from "nextra/icons";
import { Merge } from "@/types";
// types からMenuItem, Item, PageItemなどimportする予定
// 本家はcnでclassNameごちゃごちゃになるのを綺麗にまとめてるけど、どうする？

type NavbarMenuProps = {
  className?: string;
  menu: string;
  children: ReactNode;
};

type NavbarProps = {
  flatDirectories: string[];
  items: (string | number)[];
};

// https://github.com/shuding/nextra/blob/dc9cdf220c2a4cf03b3733c02d8d22e6eda8ec80/packages/nextra-theme-docs/src/components/navbar.tsx

const NavbarMenu = ({ className, menu, children }: NavbarMenuProps) => {
  return <div className="nx-relative nx-inline-block">{children}</div>;
};

const Navbar = ({ flatDirectories, items }: NavbarProps) => {
  return <></>;
};

export default Navbar;
