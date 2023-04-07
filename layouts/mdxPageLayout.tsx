import { ReactNode } from "react";
import { useConfig } from "nextra-theme-docs";
import LocalizedDate from "@/components/localizedDate";
import Image from "@/components/image";
import { MyFrontMatterType } from "@/types";

type Props = {
  children: ReactNode;
};
const MdxPageLayout = ({ children }: Props) => {
  const { frontMatter, title } = useConfig<MyFrontMatterType>();

  return (
    <article>
      <section>
        {frontMatter["title"] ? (
          <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
            {frontMatter["title"]}
          </h1>
        ) : (
          <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">
            {title}
          </h1>
        )}
        {frontMatter["date"] && (
          <LocalizedDate designatedDate={frontMatter["date"]} />
        )}
      </section>
      <section>{children}</section>
    </article>
  );
};

export default MdxPageLayout;
