import { FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
