import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Icon.module.scss';

interface IIconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IIconProps) => {
  const { className, Svg, inverted } = props;

  return (
    <Svg
      className={classNames(cls.Icon, { [cls.inverted]: inverted }, [
        className,
      ])}
    />
  );
});
