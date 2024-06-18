import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating';
import { RatingCard } from '@/entities/Rating';

const AboutPage = () => {
  const { t } = useTranslation('about');
  return (
    <Page data-testid="AboutPage">
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
