import { getUserAuthData } from '@/entities/User';
import { updateFeatureFlag } from '@/shared/lib/features';
import { getFeatureFlag } from '@/shared/lib/features/lib/setGetFeatures';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const userData = useSelector(getUserAuthData);
  const items = [
    { value: 'new', content: t('New') },
    { value: 'old', content: t('Old') },
  ];

  const onChange = useCallback(
    async (value: string) => {
      if (userData) {
        setIsLoading(true);
        await dispatch(
          updateFeatureFlag({
            userId: userData?.id,
            newFeatures: { isAppRedesigned: value === 'new' },
          })
        ).unwrap();
        setIsLoading(false);
      }
    },
    [dispatch, userData]
  );

  return (
    <HStack gap="16">
      <Text text="Interface variant" />
      <ListBox
        className={className}
        items={items}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={onChange}
        value={isAppRedesigned ? 'new' : 'old'}
      />
      {isLoading && <Text text="Loading..." />}
    </HStack>
  );
});
