import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputText from "./InputText";

export default {
  title: "InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <div style={{ width: "200px" }}>
    <InputText {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = { hasError: false, placeholder: "テキストを入力", type: "text" };

export const Password = Template.bind({});
Password.args = {
  hasError: false,
  placeholder: "パスワードを入力",
  hasPasswordMask: true,
  type: "password",
};
