import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button/Button";
import InputText from "./InputText";
import styles from "./InputText.module.css";

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

type SampleFormItem = {
  name: string;
  email: string;
  password: string;
};

export const SampleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SampleFormItem>();

  const onSubmit: SubmitHandler<SampleFormItem> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="name">
          ユーザー名
        </label>
        <InputText
          id="name"
          type="text"
          placeholder="sample"
          hasError={!!errors["name"]}
          {...register("name", {
            required: true,
          })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="email">
          メールアドレス
        </label>
        <InputText
          id="email"
          type="email"
          placeholder="example@example.com"
          hasError={!!errors["email"]}
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel} htmlFor="password">
          パスワード
        </label>
        <InputText
          id="password"
          type="password"
          hasPasswordMask
          hasError={!!errors["password"]}
          {...register("password", {
            required: true,
          })}
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="submit" visual="primary">
          送信
        </Button>
      </div>
    </form>
  );
};
