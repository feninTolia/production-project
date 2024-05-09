import { Flex, IFlexProps } from '../Flex/Flex';

type HStackProps = Omit<IFlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  return <Flex direction="row" {...props} />;
};
