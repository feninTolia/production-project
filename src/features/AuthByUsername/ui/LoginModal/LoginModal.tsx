import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
      <LoginForm />
    </Modal>
  );
};
