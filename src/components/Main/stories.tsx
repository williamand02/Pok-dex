import { ComponentMeta, ComponentStory } from "@storybook/react";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

// export const Basic = () => <Main />;

export const Primary = Template.bind({});
