import { ReactNode, memo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames';
import cls from './Drawer.module.scss';
// import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

interface IDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: IDrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  //   const { theme } = useTheme();

  const mods: Mods = { [cls.opened]: isOpen };

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, mods, [
          className,
          //   theme,
          //   'app_drawer',
        ])}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
