import { FaSistrix, FaInfo, FaTrash } from "react-icons/fa";
import Button from "src/components/Button";

import styles from "./Button.module.css";

export default {
  title: "Button",
  component: Button,
};

export const PrimaryButton = {
  args: { visual: "primary", size: "medium", disabled: false },
};

export const SecondaryButton = {
  args: { visual: "secondary", size: "medium", disabled: false },
};

export const AlertButton = {
  args: { visual: "alert", size: "medium", disabled: false },
};

export const Gallery = () => {
  return (
    <>
      <h4 className={styles.title}>size: medium</h4>
      <div className={styles.buttonWrapper}>
        <Button visual="primary">primary</Button>
        <Button visual="secondary">secondary</Button>
        <Button visual="alert">alert</Button>
      </div>

      <h4 className={styles.title}>disabled</h4>
      <div className={styles.buttonWrapper}>
        <Button visual="primary" size="large" disabled>
          small
        </Button>
        <Button visual="secondary" size="medium" disabled>
          large
        </Button>
        <Button visual="alert" size="small" disabled>
          medium
        </Button>
      </div>

      <h4 className={styles.title}>アイコン有り</h4>
      <div className={styles.buttonWrapper}>
        <Button visual="primary" className={styles.hasIcon}>
          <FaSistrix />
          検索
        </Button>
        <Button visual="secondary" className={styles.hasIcon}>
          <FaInfo />
          お知らせ
        </Button>
        <Button visual="alert" className={styles.hasIcon}>
          <FaTrash />
          削除します
        </Button>
      </div>
    </>
  );
};
