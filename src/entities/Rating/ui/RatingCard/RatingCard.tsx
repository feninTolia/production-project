import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { StarRating } from '@/shared/ui/redesigned/Avatar/StarRating';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            value={feedback}
            onChange={setFeedback}
            placeholder="Feedback"
            data-testid="RatingCard.Input"
          />
        </>
      }
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            value={feedback}
            onChange={setFeedback}
            placeholder="Feedback"
            data-testid="RatingCard.Input"
          />
        </>
      }
    />
  );

  const content = (
    <>
      {' '}
      <VStack gap="16" align="center">
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <Text
              size="l"
              title={starsCount ? t('Thank you for your feedback') : title}
            />
          }
          off={
            <TextDeprecated
              size={TextSize.L}
              title={starsCount ? t('Thank you for your feedback') : title}
            />
          }
        />

        <StarRating selectedStars={starsCount} onSelect={handleSelect} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <VStack gap="32" max>
            {modalContent}

            <ToggleFeatures
              feature={'isAppRedesigned'}
              on={
                <HStack gap="16" justify="end" max>
                  <Button
                    data-testid="RatingCard.Close"
                    variant="outline"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    data-testid="RatingCard.Send"
                    variant="outline"
                    onClick={handleAccept}
                  >
                    Send
                  </Button>
                </HStack>
              }
              off={
                <HStack gap="16" justify="end" max>
                  <ButtonDeprecated
                    data-testid="RatingCard.Close"
                    theme={ButtonTheme.OUTLINED_RED}
                    onClick={handleClose}
                  >
                    Close
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid="RatingCard.Send"
                    theme={ButtonTheme.OUTLINED}
                    onClick={handleAccept}
                  >
                    Send
                  </ButtonDeprecated>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={handleClose}>
          <VStack gap="32" max>
            {modalContent}
            <ToggleFeatures
              feature={'isAppRedesigned'}
              on={
                <Button
                  variant="outline"
                  onClick={handleAccept}
                  size="xl"
                  fullWidth
                >
                  Send
                </Button>
              }
              off={
                <ButtonDeprecated
                  theme={ButtonTheme.OUTLINED}
                  onClick={handleAccept}
                  size={ButtonSize.XL}
                  fullWidth
                >
                  Send
                </ButtonDeprecated>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card padding="24" className={className} max data-testid="RatingCard">
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
});
