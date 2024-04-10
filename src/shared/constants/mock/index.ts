import {
  ArticleBlockTypes,
  IArticle,
  IArticleTypes,
} from 'entities/Article/model/types/article';

export const mockArticle: IArticle = {
  id: '1',
  title: 'Javascript news',
  subtitle: "What's new in JS in 2024",
  img: 'https://korzh.com/assets/images/javascript.png',
  views: 2045,
  createdAt: '09.04.2024',
  type: [IArticleTypes.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockTypes.TEXT,
      title: 'Introduction',
      paragraphs: [
        'As technology evolves, so does JavaScript. In 2024, JavaScript enthusiasts and developers have exciting new features to explore and integrate into their projects. Let’s delve into some of the cutting-edge additions to the language that promise to enhance productivity and streamline development processes.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockTypes.TEXT,
      title: 'Array Grouping',
      paragraphs: [
        'One of the most awaited features in JavaScript is native array grouping. Traditionally, developers have relied on libraries like lodash to achieve this functionality. However, with the latest JavaScript update, array grouping becomes a built-in feature, eliminating the need for external dependencies.',
      ],
    },
    {
      id: '3',
      type: ArticleBlockTypes.CODE,
      title: 'Example',
      code: "const people = [\n    { name: 'sam', age: 28 },\n    { name: 'alex', age: 28 }\n]\n\nObject.groupBy(people, person => {\n    return person.age\n})\n\nOutput : {\n    '28' : [\n        { name: 'chandra', age: 28 },\n        { name: 'alex', age: 28 }\n    ]\n\n}",
    },
    {
      id: '4',
      type: ArticleBlockTypes.IMAGE,
      title: 'https://caniuse.com/?search=Promise.withResolvers',
      src: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JGkZrZOnmVWOMWRJbQq3Uw.png',
    },
    {
      id: '5',
      type: ArticleBlockTypes.TEXT,
      title: 'Decorators',
      paragraphs: [
        'Decorators provide a powerful and expressive way to modify and annotate class declarations and members. By wrapping classes, methods, or fields with decorators, developers can abstract common patterns and behaviors, thereby reducing boilerplate and enhancing code readability and maintainability.',
        'The proposal is mostly finished and now needs feedback from implementations and users to progress further.',
      ],
    },
    {
      id: '6',
      type: ArticleBlockTypes.CODE,
      title: 'The Power of Decorators in Code',
      code: 'const debounce = (fn, delay) => {\n  let lastTimeout = null\n\n  return (...args) => {\n    clearInterval(lastTimeout)\n\n    lastTimeout = setTimeout(() => fn.call(null, ...args), delay)\n  }\n}\n\nclass SearchForm {\n  @debounce(300)\n  handleUserInput(evt) {\n    console.log(evt.target.value)\n  }\n}',
    },
    {
      id: '7',
      type: ArticleBlockTypes.TEXT,
      title: 'Conclusion',
      paragraphs: [
        'These enhancements promise to make JavaScript development more intuitive, powerful, and efficient. As these features progress towards finalization, developers should keep an eye on their development and consider how they can be leveraged to improve future projects.',
        'Feel free to contact me: LinkedIn',
      ],
    },
  ],
};
