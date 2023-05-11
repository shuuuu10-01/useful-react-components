import { FC, ReactNode, useContext, useLayoutEffect } from "react";
import { TabContext } from "./Tab";

type TabItemProps = {
  tabKey: string | number;
  label: ReactNode;
  children: ReactNode;
  className?: string;
};

const TabItem: FC<TabItemProps> = ({ tabKey, label, children, className }) => {
  const { activeKey, addItem } = useContext(TabContext);

  useLayoutEffect(() => {
    addItem(tabKey, label);
  });

  return (
    <>
      {activeKey === tabKey ? (
        <div className={className}>{children}</div>
      ) : null}
    </>
  );
};

export default TabItem;
