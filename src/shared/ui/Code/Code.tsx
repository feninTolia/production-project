import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from 'shared/assets/icons/contract.svg';

interface ICodeProps {
  className?: string;
  code: string;
}

export const Code = memo((props: ICodeProps) => {
  const { className, code } = props;

  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(code);
  }, [code]);

  return (
    <div className={classNames(cls.codeWrapper, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR}
        className={cls.copyBtn}
        onClick={handleCopy}
      >
        <CopyIcon />
      </Button>
      <pre className={cls.code}>
        <code>{code}</code>
      </pre>
    </div>
  );
});
