import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import cls from './AddCommentForm.module.scss';
import DynamicModuleLoader from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

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

  if (error) {
    return (
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Text
          text={error}
          title={t('Something went wrong')}
          theme={TextTheme.ERROR}
        />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={{ addCommentForm: addCommentFormReducer }}>
      <div
        data-testid="AddCommentForm"
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          data-testid="AddCommentForm.Input"
          className={cls.input}
          placeholder={t('Enter comment text')}
          value={text ?? ''}
          onChange={onCommentTextChange}
        />
        <Button
          data-testid="AddCommentForm.Button"
          theme={ButtonTheme.OUTLINED}
          onClick={() => {
            onSendComment(text);
            onCommentTextChange('');
          }}
        >
          {t('Send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
