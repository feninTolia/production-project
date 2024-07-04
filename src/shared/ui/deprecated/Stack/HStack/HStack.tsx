import { Flex, IFlexProps } from '../Flex/Flex';

type HStackProps = Omit<IFlexProps, 'direction'>;

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />;
};
