# Project launch

```text
npm install - set dependencies
npm run start:dev or npm run start:dev:vite - running server + frontend project in dev mode
```

---

## Scripts

- `npm run start` - Start frontend project on webpack dev server
- `npm run start:vite` - Start frontend project on vite
- `npm run start:dev` - Start frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Start frontend project on vite + backend
- `npm run start:dev:server` - Start backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files style by linter
- `npm run lint:scss:fix` - Fix scss files with linter
- `npm run test:unit` - Run unit tests with jest
- `npm run storybook` - Run Storybook
- `npm run storybook:build` - Build a storybook build
- `npm run prepare` - pre-commit hooks
- `npm run generate:slice` - Script for FSD slice generation

---

## Project Architecture

The project is written according to Feature sliced design methodology

The link to the documentation is - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with translations

The project uses i18next library to work with translations.

Files with translations are stored in public/locales.

Documentation i18next - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

There are 4 types of tests used in the project:

1. regular unit tests on jest - `npm run test:unit`.
2. tests on components with React testing library - `npm run test:unit`.

More information about tests - [documentation testing](/docs/tests.md)

---

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
The project uses its own eslint plugin _eslint-plugin-ftoe-plugin_,
which contains 3 rules

1. path-checker - forbids to use absolute imports within one module
2. layer-imports - checks if layers are used correctly from FSD point of view.
   (e.g. widgets cannot be used in features and entities)
3. public-api-imports - allows import from other modules only from public api. Has auto fix

### Run lint

- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter

---

## Storybook

In the project, storybooks are described for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with storybooks creates next to the component with the extension .stories.tsx

You can run the storybook with the command:

- `npm run storybook`.

Read more about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
```

---

## Project Configuration

For development, the project contains 2 configs:

1. webpack - ./config/build
2. vite - vite.config.ts

Both builds are adapted to the main features of the application.

All configuration is stored in /config

- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring/simplifying code writing/report generation etc.

---

## CI pipeline and pre commit hooks

The github actions configuration is in /.github/workflows.
In ci we run all kinds of tests, build project and storybook, linting.

In pre commit hooks we check the project with linters, config is in /.husky

---

### Working with data

Interacting with data is done using the redux toolkit.
If possible, overused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) we use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

---

### Working with feature-flags

Only allowed to use feature flags with the help of a helper toggleFeatures

an object with options is passed to it

{
name: the name of the feature flags,
on: the function that will work after the feature is switched,
off: the function that will work after the feature is switched off
}

To automatically remove a fiche, use the remove-feature.ts script, which takes 2 arguments

1. The name of the fiche-feature to be removed
2. State (on or off)

---

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
