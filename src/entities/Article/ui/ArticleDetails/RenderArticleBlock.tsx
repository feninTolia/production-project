import { ArticleBlockTypes } from '../../model/constants';
import { IArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

export const RenderArticleBlock = (block: IArticleBlock) => {
  switch (block.type) {
    case ArticleBlockTypes.CODE:
      return (
        <ArticleCodeBlock
          title={block.title}
          code={block.code}
          key={block.id}
        />
      );
    case ArticleBlockTypes.IMAGE:
      return (
        <ArticleImageBlock title={block.title} src={block.src} key={block.id} />
      );
    case ArticleBlockTypes.TEXT:
      return (
        <ArticleTextBlock
          paragraphs={block.paragraphs}
          title={block.title}
          key={block.id}
        />
      );
    default:
      return null;
  }
};
