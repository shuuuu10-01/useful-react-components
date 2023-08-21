import Dropdown from "./Dropdown";
import styles from "./Dropdown.module.css";

export default {
  title: "Dropdown",
};

export const Sample = () => {
  return (
    <div style={{ width: "500px", height: "100px" }}>
      <Dropdown>
        <Dropdown.ToggleButton>toggle</Dropdown.ToggleButton>
        <Dropdown.Body>
          <ul className={styles.items}>
            <li>first item</li>
            <li>second item</li>
          </ul>
        </Dropdown.Body>
      </Dropdown>
    </div>
  );
};

export const Gallery = () => {
  return (
    <div>
      <p>
        トグルボタンが画面真ん中より下のとき、トグルボタンより上にドロップダウンを表示
      </p>
      <div
        style={{
          width: "§00px",
          height: "500px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Dropdown>
          <Dropdown.ToggleButton>トグル</Dropdown.ToggleButton>
          <Dropdown.Body>
            <ul className={styles.items}>
              <li>1つ目のアイテム</li>
              <li>2つ目のアイテム</li>
            </ul>
          </Dropdown.Body>
        </Dropdown>
      </div>
      <p>
        トグルボタンが画面真ん中より上のとき、トグルボタンより下にドロップダウンを表示
      </p>
    </div>
  );
};
