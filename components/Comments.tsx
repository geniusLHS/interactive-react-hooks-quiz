"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

interface Props {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
}

const Comments = ({ repo, repoId, category, categoryId }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === "light" ? "noborder_light" : "noborder_dark"}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

export default Comments;
