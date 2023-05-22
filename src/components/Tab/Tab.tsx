import {
  createContext,
  FC,
  ReactNode,
  useMemo,
  useState,
  useContext,
  ReactElement,
} from "react";
import classNames from "classnames";
import styles from "./Tab.module.css";

type TabKey = string | number;
type TabLabel = string | number | JSX.Element;

type TabProps = {
  defaultKey: TabKey;
  children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[];
  className?: string;
};

type TabHeader = {
  tabKey: TabKey;
  label: TabLabel;
};

type TabContextState = {
  activeKey: TabKey;
};

const TabContext = createContext<TabContextState>({
  activeKey: "",
});

export const Tab: FC<TabProps> = ({ defaultKey, children, className }) => {
  const [activeKey, setActiveKey] = useState(defaultKey);
  const headers = useMemo<TabHeader[]>(() => {
    const headerArray: TabHeader[] = [];
    if (Array.isArray(children)) {
      children.forEach((c) => {
        if (c.type !== TabItem) return;
        headerArray.push({
          tabKey: c.props.tabKey,
          label: c.props.label,
        });
      });
    } else if (children.type === TabItem) {
      headerArray.push({
        tabKey: children.props.tabKey,
        label: children.props.label,
      });
    }
    return headerArray;
  }, [children]);

  return (
    <TabContext.Provider value={{ activeKey: activeKey }}>
      <ul className={classNames(styles.header, className)}>
        {headers.map(({ tabKey, label }) => {
          return (
            <li className={styles.column} key={tabKey}>
              <button
                className={classNames(
                  styles.button,
                  tabKey === activeKey && styles.active
                )}
                onClick={() => setActiveKey(tabKey)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
      {children}
    </TabContext.Provider>
  );
};

type TabItemProps = {
  tabKey: TabKey;
  label: TabLabel;
  children: ReactNode;
  className?: string;
};

export const TabItem: FC<TabItemProps> = ({ tabKey, children, className }) => {
  const { activeKey } = useContext(TabContext);

  return activeKey === tabKey ? (
    <div className={classNames(styles.tabBody, className)}>{children}</div>
  ) : null;
};
