import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick' | 'data-testid'>;

interface IIconBaseProps extends SvgProps {
  className?: string;
  'data-testid': string;
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
    'data-testid': dataTestId,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, { [cls.disabled]: !clickable }, [
        className,
      ])}
      width={width}
      height={height}
      data-testid={dataTestId}
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
        data-testid={dataTestId}
        style={{ width, height }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
