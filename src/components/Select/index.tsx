import classNames from "classnames";
import {
  ComponentPropsWithRef,
  FC,
  FocusEvent,
  useMemo,
  useRef,
  useState,
} from "react";

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
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (itemsRef.current?.contains(relatedTarget)) return;

    setIsOpen(false);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    // 選択肢を閉じない場合は以下のコメントアウトを外す
    toggleRef.current?.focus();
    // 選択肢を閉じる場合は以下のコメントアウトを外す
    // setIsOpen(false);
  };

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
        ref={toggleRef}
        className={styles.button}
        onClick={handleToggle}
        onBlur={handleBlur}
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
              onClick={() => handleSelect(value)}
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
