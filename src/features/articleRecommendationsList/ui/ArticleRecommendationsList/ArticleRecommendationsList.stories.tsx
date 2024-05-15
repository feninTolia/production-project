import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { mockArticle } from 'shared/constants/mock';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  parameters: {
    mockData: [
      {
        url: __API__ + '/articles?_limit=3',
        method: 'GET',
        status: 200,
        response: [
          mockArticle,
          { ...mockArticle, id: 3 },
          { ...mockArticle, id: 33 },
        ],
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

// const Template = () => <ArticleRecommendationsList />;
// export const FetchCall = Template.bind({});
