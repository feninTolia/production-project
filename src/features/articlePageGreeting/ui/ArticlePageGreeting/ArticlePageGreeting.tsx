import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { articlesPageHasBeenOpen } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!articlesPageHasBeenOpen) {
      setIsOpen(true);
      void dispatch(saveJsonSettings({ articlesPageHasBeenOpen: true }));
    }
  }, [articlesPageHasBeenOpen, dispatch]);

  const handleClose = () => setIsOpen(false);

  const text = (
    <Text
      title={t('Welcome to articles page')}
      text={t('Byu some really valuable in our shop')}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={handleClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={handleClose}>
      {text}
    </Modal>
  );
});
