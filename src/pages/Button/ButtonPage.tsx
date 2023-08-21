import { FC } from "react";
import { FaSistrix, FaInfo, FaTrash } from "react-icons/fa";
import Button from "src/components/Button/Button";

import styles from "./ButtonPage.module.css";

const ButtonPage: FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <h4 className={styles.title}>size: medium</h4>
      <div className={styles.buttonWrapper}>
        <Button visual="primary">primary</Button>
        <Button visual="secondary">secondary</Button>
        <Button visual="alert">alert</Button>
      </div>

      <h4 className={styles.title}>custom</h4>
      <div className={styles.buttonWrapper}>
        <Button visual="primary" size="small">
          primary & small
        </Button>
        <Button visual="secondary" size="large">
          secondary & large
        </Button>
        <Button visual="alert" size="medium">
          alert & medium
        </Button>
      </div>

      <h4 className={styles.title}>has icon</h4>
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
    </div>
  );
};

export default ButtonPage;
