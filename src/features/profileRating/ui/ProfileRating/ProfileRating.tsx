import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useProfileRatingList,
  useRateProfile,
} from '../../api/profileRatingApi';

interface IProfileRatingProps {
  className?: string;
  profileId?: string;
}

const ProfileRating = memo((props: IProfileRatingProps) => {
  const { className, profileId } = props;
  const { t } = useTranslation();
  const user = useSelector(getUserAuthData);

  const { data, isLoading } = useProfileRatingList({
    userId: user?.id ?? '',
    profileId: profileId ?? '',
  });
  const [mutate] = useRateProfile();

  const handleRateArticle = useCallback(
    (starCount: number, feedback?: string) => {
      if (!user?.id) return;

      try {
        void mutate({
          userId: user?.id,
          profileId: profileId ?? '',
          rate: starCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [mutate, profileId, user?.id]
  );

  const handleAccept = useCallback(
    (starCount: number, feedback?: string) => {
      handleRateArticle(starCount, feedback);
    },
    [handleRateArticle]
  );

  const handleCancel = useCallback(
    (starCount: number) => {
      handleRateArticle(starCount);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width="100%" height="100px" />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={className}
      title={t('Rate the user profile!')}
      hasFeedback={false}
      rate={rating?.rate}
      onAccept={handleAccept}
      onCancel={handleCancel}
    />
  );
});

export default ProfileRating;
