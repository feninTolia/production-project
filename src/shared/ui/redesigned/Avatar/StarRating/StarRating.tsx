import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { memo, useState } from 'react';
import { Icon as IconDeprecated } from '../../../deprecated/Icon/Icon';
import { Icon } from '../../Icon';
import cls from './StarRating.module.scss';

interface IStarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: IStarRatingProps) => {
  const { className, selectedStars = 0, size = 40, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const handleHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const handleLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const handleClick = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
      onSelect?.(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          off: () => cls.StarRating,
          on: () => cls.StarRatingRedesigned,
        }),
        {},
        [className]
      )}
    >
      {stars.map((starNumber) => {
        const props = {
          className: classNames(
            cls.starIcon,
            {
              [cls.hovered]: currentStarsCount >= starNumber,
              [cls.isSelected]: isSelected,
            },
            []
          ),
          disabled: isSelected,
          Svg: StarIcon,
          height: size,
          width: size,
          onMouseEnter: handleHover(starNumber),
          onMouseLeave: handleLeave,
          onClick: handleClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': currentStarsCount >= starNumber,
        };

        return (
          <ToggleFeatures
            key={starNumber}
            feature={'isAppRedesigned'}
            on={<Icon clickable={!isSelected} {...props} />}
            off={<IconDeprecated {...props} />}
          />
        );
      })}
    </div>
  );
});
