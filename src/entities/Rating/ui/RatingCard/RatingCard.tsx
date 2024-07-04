import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

interface IRatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  rate?: number;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback: string) => void;
}

export const RatingCard = memo((props: IRatingCardProps) => {
  const {
    className,
    hasFeedback,
    title,
    feedbackTitle,
    onAccept,
    onCancel,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const handleSelect = useCallback(
    (starsCount: number) => {
      setStarsCount(starsCount);

      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(starsCount, feedback);
      }
    },
    [feedback, hasFeedback, onAccept]
  );

  const handleClose = useCallback(() => {
    onCancel?.(starsCount);
    setIsModalOpen(false);
  }, [onCancel, starsCount]);

  const handleAccept = useCallback(() => {
    onAccept?.(starsCount, feedback);
    setIsModalOpen(false);
  }, [feedback, onAccept, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder="Feedback"
        data-testid="RatingCard.Input"
      />
    </>
  );

  return (
    <>
      <Card className={className} max data-testid="RatingCard">
        <VStack gap="16" align="center">
          <Text
            size={TextSize.L}
            title={starsCount ? t('Thank you for your feedback') : title}
          />
          <StarRating selectedStars={starsCount} onSelect={handleSelect} />
        </VStack>
      </Card>

      <BrowserView>
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <VStack gap="32" max>
            {modalContent}

            <HStack gap="16" justify="end" max>
              <Button
                data-testid="RatingCard.Close"
                theme={ButtonTheme.OUTLINED_RED}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                data-testid="RatingCard.Send"
                theme={ButtonTheme.OUTLINED}
                onClick={handleAccept}
              >
                Send
              </Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={handleClose}>
          <VStack gap="32" max>
            {modalContent}
            <Button
              theme={ButtonTheme.OUTLINED}
              onClick={handleAccept}
              size={ButtonSize.XL}
              fullWidth
            >
              Send
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );
});
