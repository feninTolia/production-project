import {
  ImgHTMLAttributes,
  ReactElement,
  memo,
  useLayoutEffect,
  useState,
} from 'react';

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo((props: IAppImageProps) => {
  const {
    className,
    alt = 'image',
    src = '',
    fallback,
    errorFallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }
  if (hasError && errorFallback) {
    return errorFallback;
  }

  return <img src={src} alt={alt} className={className} {...otherProps} />;
});
