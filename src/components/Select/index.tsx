import classNames from "classnames";
import { ComponentPropsWithRef, FC, useMemo, useRef, useState } from "react";

import styles from "./Select.module.css";

type Props = ComponentPropsWithRef<"select"> & {
  items: {
    value: string;
    label?: string;
  }[];
};

const Select: FC<Props> = ({ items, defaultValue, ref, ...props }) => {
  const [selected, setSelected] = useState(defaultValue);

  const [isOpen, setIsOpen] = useState(false);

  const selectedValue = useMemo(() => {
    const selectItem = items.find(({ value }) => value === selected);
    if (selectItem === undefined) {
      return "";
    } else {
      return selectItem?.label || selectItem.value;
    }
  }, [items, selected]);

  const itemsRef = useRef<HTMLDivElement>(null);

  const itemsHeight = useMemo(() => {
    return isOpen ? `${items.length * 40 + 40}px` : "40px";
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      <select ref={ref} defaultValue={selected} {...props} hidden>
        <option value="">-</option>
        {items.map(({ value, label = value }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
      <button
        className={styles.button}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue}
      </button>
      <div
        ref={itemsRef}
        className={classNames(styles.items, isOpen && styles.open)}
        style={{ height: itemsHeight }}
      >
        {items.map(({ value, label = value }) => {
          return (
            <button
              key={value}
              className={styles.item}
              onClick={() => {
                setSelected(value);
              }}
            >
              {label}
            </button>
          );
        })}
        {isOpen && <div className={styles.lastItem}></div>}
      </div>
    </div>
  );
};

export default Select;
