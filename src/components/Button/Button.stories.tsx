import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Sample</Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { visual: "primary", size: "medium", disabled: false };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { visual: "secondary", size: "medium", disabled: false };

export const AlertButton = Template.bind({});
AlertButton.args = { visual: "alert", size: "medium", disabled: false };
