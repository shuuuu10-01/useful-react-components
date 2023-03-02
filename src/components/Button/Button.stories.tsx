import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Sample</Button>
);

export const FillButton = Template.bind({});
FillButton.args = { visual: "fill" };

export const OutlineButton = Template.bind({});
OutlineButton.args = { visual: "outline" };

export const AlertFillButton = Template.bind({});
AlertFillButton.args = { visual: "alertFill" };

export const AlertOutlineButton = Template.bind({});
AlertOutlineButton.args = { visual: "alertOutline" };
