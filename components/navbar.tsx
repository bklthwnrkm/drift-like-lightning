import React, { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { ArrowRightIcon, MenuIcon } from "nextra/icons";
import cn from "clsx";
// import { renderComponent } from "nextra/dist";
import { Merge } from "@/types";

type NavbarMenuProps = {
  className?: string;
  menu: string;
  children: ReactNode;
};

type NavbarProps = {
  items: (string | number)[];
};

const classNameStr = {
  link: cn(
    "nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100"
  ),
  active: cn("nx-font-medium nx-subpixel-antialiased"),
  inactive: cn(
    "nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
  ),
};

const NavbarMenu = ({ className, menu, children }: NavbarMenuProps) => {
  return <div className="nx-relative nx-inline-block">{children}</div>;
};

const Navbar = ({ items }: NavbarProps): ReactElement => {
  const config = useConfig();
  const { asPath, locale = "en" } = useRouter();
  return (
    <div className="nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent">
      <nav className="nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
        {config.logoLink ? (
          <div>Logo</div>
        ) : (
          <div className="nx-flex nx-items-center ltr:nx-mr-auto rtl:nx-ml-auto">
            {/* {renderComponent(config.logo)} */}
          </div>
        )}
        {items.map((pageOrMenu) => {
          return <span>{pageOrMenu}</span>;
        })}
      </nav>
    </div>
  );
};

export default Navbar;
