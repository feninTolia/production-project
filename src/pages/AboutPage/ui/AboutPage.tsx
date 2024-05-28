import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating/ui/RatingCard/RatingCard';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page>
      <h1>{t('About page')}</h1>
      <br />
      <StarRating />
      <br />
      <RatingCard
        hasFeedback
        title="About Rating"
        feedbackTitle="Rate about page"
      />
    </Page>
  );
};

export default AboutPage;
