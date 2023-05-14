import {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useMemo,
  useState,
  useCallback,
} from "react";
import classNames from "classnames";
import styles from "./Tab.module.css";

type TabProps = {
  defaultKey: string | number;
  children: ReactElement[] | ReactElement;
  className?: string;
};

type TabHeaderState = {
  tabKey: string | number;
  label: ReactNode;
};

type TabContextState = {
  activeKey: string | number;
  addItem: (tabKey: string | number, label: ReactNode) => void;
};

export const TabContext = createContext<TabContextState>({
  activeKey: "",
  addItem: () => {},
});

const Tab: FC<TabProps> = ({ defaultKey, children, className }) => {
  const [activeKey, setActiveKey] = useState(defaultKey);

  const [headers, setHeaders] = useState<TabHeaderState[]>([]);

  const addHeader = useCallback(
    (tabKey: string | number, label: ReactNode) => {
      if (headers.find((t) => t.tabKey === tabKey)) return;
      setHeaders((tabs) => [...tabs, { tabKey, label }]);
    },
    [headers]
  );

  const tabState = useMemo<TabContextState>(() => {
    return {
      activeKey: activeKey,
      addItem: addHeader,
    };
  }, [activeKey, addHeader]);

  return (
    <TabContext.Provider value={tabState}>
      <ul className={styles.header}>
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
      <div className={classNames(styles.tabBody, className)}>{children}</div>
    </TabContext.Provider>
  );
};

export default Tab;
