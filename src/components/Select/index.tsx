import classNames from "classnames";
import {
  ComponentPropsWithRef,
  FC,
  FocusEvent,
  useMemo,
  useRef,
  useState,
} from "react";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./Select.module.css";

type Option = {
  value: string;
  label?: string;
};

type Props = ComponentPropsWithRef<"select"> & {
  items: Option[];
  upper?: boolean;
  defaultValue?: string;
  onSelect?: (value: Option) => void;
};

const Select: FC<Props> = ({
  items,
  upper = false,
  onSelect,
  defaultValue,
  ref,
  ...props
}) => {
  const [selected, setSelected] = useState(defaultValue);

  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = useMemo(() => {
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
      <select
        ref={ref}
        {...props}
        hidden
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
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
        <p>{selectedLabel}</p>
        <IoIosArrowDown
          className={classNames(styles.buttonIcon, isOpen && styles.open)}
        />
      </button>
      <div
        ref={itemsRef}
        className={classNames(
          styles.items,
          upper ? styles.upper : styles.lower,
          isOpen && styles.open
        )}
        style={{ height: itemsHeight }}
      >
        {isOpen && !upper && <div className={styles.lastItem} />}
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
        {isOpen && upper && <div className={styles.lastItem} />}
      </div>
    </div>
  );
};

export default Select;
