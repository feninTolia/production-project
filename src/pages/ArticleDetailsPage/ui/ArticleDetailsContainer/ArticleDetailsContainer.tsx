import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

interface IArticleDetailsContainerProps {
  className?: string;
}

export const ArticleDetailsContainer = memo(
  (props: IArticleDetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
      return null;
    }

    return (
      <Card max padding="24" className={className}>
        <ArticleDetails id={id} />
      </Card>
    );
  }
);
