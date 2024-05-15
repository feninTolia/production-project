import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Page } from 'shared/ui/Page/Page';
import { VStack } from 'shared/ui/Stack';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
