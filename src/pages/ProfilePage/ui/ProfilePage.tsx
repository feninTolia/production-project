import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { VStack } from '@/shared/ui/Stack';
import { ProfileRating } from '@/features/profileRating';
import { Page } from '@/widgets/Page';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="16">
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
