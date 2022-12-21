import type { Meta, StoryFn } from '@storybook/html';
import type { ComponentProps } from 'solid-js';

import Logo from './Logo';

// example with Template
const Template = ((args) => <Logo {...args} />) as StoryFn<
  ComponentProps<typeof Logo>
>;

export const LogoTemplate = Template.bind({});

LogoTemplate.args = {
  rotate: false,
};

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/html/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Logo',
  argTypes: {
    rotate: { control: 'boolean' },
  },
} as Meta<ComponentProps<typeof Logo>>;
