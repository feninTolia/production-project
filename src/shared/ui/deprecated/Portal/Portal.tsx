import { createPortal } from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
  element?: Element;
}

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const Portal = (props: IPortalProps) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
