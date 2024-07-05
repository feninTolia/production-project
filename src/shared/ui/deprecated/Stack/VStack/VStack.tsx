import { Flex, IFlexProps } from '../Flex/Flex';

type VStackProps = Omit<IFlexProps, 'direction'>;

/**
 * Is obsolete, use new redesigned components.
 * @deprecated
 * */

export const VStack = (props: VStackProps) => {
  return <Flex direction="column" align="start" {...props} />;
};