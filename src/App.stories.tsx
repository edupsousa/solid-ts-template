import type { Meta, StoryFn } from '@storybook/html';
import type { ComponentProps } from 'solid-js';

import Component from './App';

type Props = ComponentProps<typeof Component>;

const Template = ((args) => <Component {...args} />) as StoryFn<Props>;

export const LogoTemplate = Template.bind({});

export default {
  title: 'App',
} as Meta<Props>;
