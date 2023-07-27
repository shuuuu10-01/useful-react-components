import Dropdown from "./Dropdown";
import styles from "./Dropdown.module.css";

export default {
  title: "Dropdown",
};

export const Sample = () => {
  return (
    <div style={{ width: "500px", height: "100px", marginTop: "100px" }}>
      <Dropdown>
        <Dropdown.Toggle>toggle</Dropdown.Toggle>
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
