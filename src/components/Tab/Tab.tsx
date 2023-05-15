import {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useMemo,
  useState,
  useCallback,
  useContext,
  useLayoutEffect,
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

const TabContext = createContext<TabContextState>({
  activeKey: "",
  addItem: () => {},
});

export const Tab: FC<TabProps> = ({ defaultKey, children, className }) => {
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
  tabKey: string | number;
  label: ReactNode;
  children: ReactNode;
  className?: string;
};

export const TabItem: FC<TabItemProps> = ({
  tabKey,
  label,
  children,
  className,
}) => {
  const { activeKey, addItem } = useContext(TabContext);
  useLayoutEffect(() => {
    addItem(tabKey, label);
  });

  return (
    <>
      {activeKey === tabKey ? (
        <div className={classNames(styles.tabBody, className)}>{children}</div>
      ) : null}
    </>
  );
};
