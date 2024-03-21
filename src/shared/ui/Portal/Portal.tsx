import { useTheme } from 'app/providers/ThemeProvider';
import { createPortal } from 'react-dom';
import { classNames } from 'shared/lib/classNames';

interface IPortalProps {
  children: React.ReactNode;
  element?: Element;
}

export const Portal = (props: IPortalProps) => {
  const { theme } = useTheme();

  const { children, element = document.body } = props;
  return createPortal(
    <div className={classNames('app', {}, [theme])}>{children}</div>,
    element
  );
};
