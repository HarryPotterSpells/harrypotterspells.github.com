import { useEffect } from "react";

export enum MetaName {
  APPLICATION_NAME = 'application-name',
  AUTHOR = 'author',
  DESCRIPTION = 'description',
  GENERATOR = 'generator',
  KEYWORDS = 'keywords',
  VIEWPORT = 'viewport'
}

// Set the meta tags for a document
const useMeta = (name: MetaName, content: string) => {
  useEffect(() => {
    if (name && content) {
      if (document.getElementsByTagName('meta').namedItem(name) !== null) {
        document.getElementsByTagName('meta').namedItem(name)!.content = content;
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
    }
  }, [name, content]);
};

export default useMeta;
