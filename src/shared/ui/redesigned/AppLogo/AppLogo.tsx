import AppSvg from '@/shared/assets/icons/logo.svg';
import { classNames } from '@/shared/lib/classNames';
import { memo } from 'react';
import { HStack } from '../Stack';
import cls from './AppLogo.module.scss';

interface IAppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo((props: IAppLogoProps) => {
  const { className, size } = props;

  return (
    <HStack
      max
      justify={'center'}
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg width={size} height={size} color="black" />
    </HStack>
  );
});
