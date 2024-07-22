import SearchIcon from '@/shared/assets/icons/SearchIcon.svg';
import Send from '@/shared/assets/icons/Send.svg';
import { classNames } from '@/shared/lib/classNames';
import DynamicModuleLoader from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text?: string) => void;
}

const AddCommentForm = memo((props: IAddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const handleSend = useCallback(() => {
    onSendComment(text);
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  if (error) {
    return (
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <Text
              text={error}
              title={t('Something went wrong')}
              variant="error"
            />
          }
          off={
            <TextDeprecated
              text={error}
              title={t('Something went wrong')}
              theme={TextTheme.ERROR}
            />
          }
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={{ addCommentForm: addCommentFormReducer }}>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <HStack
            gap="16"
            max
            data-testid="AddCommentForm"
            className={classNames(cls.AddCommentFormRedesigned, {}, [
              className,
            ])}
          >
            <Input
              data-testid="AddCommentForm.Input"
              className={cls.input}
              placeholder={t('Enter comment text')}
              value={text ?? ''}
              onChange={onCommentTextChange}
              addonLeft={<Icon Svg={SearchIcon} width={32} height={32} />}
            />
            <Icon
              Svg={Send}
              data-testid="AddCommentForm.Button"
              clickable
              width={32}
              height={32}
              onClick={handleSend}
            />
          </HStack>
        }
        off={
          <div
            data-testid="AddCommentForm"
            className={classNames(cls.AddCommentForm, {}, [className])}
          >
            <InputDeprecated
              data-testid="AddCommentForm.Input"
              className={cls.input}
              placeholder={t('Enter comment text')}
              value={text ?? ''}
              onChange={onCommentTextChange}
            />
            <ButtonDeprecated
              data-testid="AddCommentForm.Button"
              theme={ButtonTheme.OUTLINED}
              onClick={handleSend}
            >
              {t('Send')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
