import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IIconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface INonClickableIconProps extends IIconBaseProps {
  clickable?: false;
}

interface IClickableIconProps extends IIconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = INonClickableIconProps | IClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 24,
    height = 24,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, { [cls.disabled]: !clickable }, [
        className,
      ])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        type="button"
        className={cls.button}
        onClick={props.onClick}
        style={{ width, height }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
