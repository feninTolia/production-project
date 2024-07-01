import { ReactNode, memo, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Drawer.module.scss';
import {
  AnimationProvider,
  useAnimationLibs,
} from '@/shared/lib/components/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme';

interface IDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: IDrawerProps) => {
  const { Gesture, Spring } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const { className, children, onClose, isOpen } = props;
  const { theme } = useTheme();

  const openDrawer = useCallback(() => {
    void api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    void api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        void api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.Drawer, {}, [className, theme])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: IDrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: IDrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};
