import CopyIcon from '@/shared/assets/icons/contract.svg';
import { classNames } from '@/shared/lib/classNames';
import { memo, useCallback } from 'react';
import { Icon } from '../Icon';
import cls from './Code.module.scss';

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
      <Icon
        clickable
        Svg={CopyIcon}
        onClick={handleCopy}
        className={cls.copyBtn}
      />
      <pre className={cls.code}>
        <code>{code}</code>
      </pre>
    </div>
  );
});
