import { classNames } from '@/shared/lib/classNames';
import cls from './Text.module.scss';
import { memo } from 'react';

export type TextVariant = 'primary' | 'accent' | 'error';

export type TextAlign = 'center' | 'right' | 'left';

export type TextSize = 's' | 'm' | 'l';

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;

  'data-testid'?: string;
}
type HeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTag> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo((props: ITextProps) => {
  const {
    className,
    title,
    text: description,
    variant = 'primary',
    align = 'left',
    size = 'm',
    'data-testid': dataTestId = 'Text',
    bold,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(cls.Text, { [cls.bold]: bold }, [
        className,
        cls[variant],
        cls[align],
        cls[size],
      ])}
    >
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {description && (
        <p className={cls.description} data-testid={`${dataTestId}.Paragraph`}>
          {description}
        </p>
      )}
    </div>
  );
});
