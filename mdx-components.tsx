import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children, href }) => (
      <a
        className="text-red-500 underline-offset-2 hover:underline dark:text-red-400"
        href={href}
        target="_blank"
      >
        {children}
      </a>
    ),
    ...components,
  };
}
