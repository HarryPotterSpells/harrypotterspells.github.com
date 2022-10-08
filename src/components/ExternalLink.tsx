import type { HTMLProps, ReactNode } from "react";

interface ExternalLinkProps extends HTMLProps<HTMLAnchorElement>  {
  url: string;
  newTab?: boolean;
  children?: ReactNode
}

export const ExternalLink = (props: ExternalLinkProps) => {
  const { url, newTab, children, ...attributes} = props;
  if (newTab === false) {
    return <a {...attributes} rel="noreferrer" href={url}>{children}</a>;
  }
  return <a {...attributes} href={url} rel="noreferrer" target="_blank">{children}</a>;
};
