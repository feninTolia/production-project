import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ProfileRating } from '@/features/profileRating';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <StickyContentLayout
          content={
            <Page data-testid="ProfilePage">
              <VStack gap="16">
                <EditableProfileCard id={id} />
                <ProfileRating profileId={id} />
              </VStack>
            </Page>
          }
        />
      }
      off={
        <Page data-testid="ProfilePage">
          <VStack gap="16">
            <EditableProfileCard id={id} />
            <ProfileRating profileId={id} />
          </VStack>
        </Page>
      }
    />
  );
};

export default ProfilePage;
