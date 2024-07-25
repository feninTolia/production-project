import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { memo } from 'react';

interface IScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: IScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack justify="center" align="center" max maxHeight className={className}>
      <ScrollToTopButton />
    </VStack>
  );
});
