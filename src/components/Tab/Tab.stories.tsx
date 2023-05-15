import { ComponentMeta } from "@storybook/react";
import { Tab, TabItem } from "./Tab";
import { FaInfo } from "react-icons/fa";
import styles from "./Tab.module.css";

export default {
  title: "Tab",
} as ComponentMeta<typeof Tab>;

export const Text = () => {
  return (
    <div style={{ width: "500px" }}>
      <Tab defaultKey="a">
        <TabItem tabKey="a" label="a">
          aaaaaaaaaa
        </TabItem>
        <TabItem tabKey="b" label="b">
          bbbbbbbbbb
        </TabItem>
      </Tab>
    </div>
  );
};

export const Number = () => {
  return (
    <div style={{ width: "500px" }}>
      <Tab defaultKey={1}>
        {[1, 2, 3, 4, 5].map((num) => {
          return (
            <TabItem tabKey={num} label={num} key={num}>
              {num}
            </TabItem>
          );
        })}
      </Tab>
    </div>
  );
};

export const Icon = () => {
  const headerLabel = (label: string) => {
    return (
      <div className={styles.hasIcon}>
        <FaInfo />
        {label}
      </div>
    );
  };

  return (
    <div style={{ width: "500px" }}>
      <Tab defaultKey="1st">
        <TabItem tabKey="1st" label={headerLabel("1st")}>
          1st content
        </TabItem>
        <TabItem tabKey="2nd" label={headerLabel("2nd")}>
          2nd content
        </TabItem>
        <TabItem tabKey="3rd" label={headerLabel("3rd")}>
          3rd content
        </TabItem>
      </Tab>
    </div>
  );
};
