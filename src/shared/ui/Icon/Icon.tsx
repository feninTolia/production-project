import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Icon.module.scss';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  disabled?: boolean;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IIconProps) => {
  const { className, Svg, inverted, disabled, ...otherProps } = props;

  return (
    <Svg
      className={classNames(
        cls.Icon,
        { [cls.inverted]: inverted, [cls.disabled]: disabled },
        [className]
      )}
      {...otherProps}
    />
  );
});
