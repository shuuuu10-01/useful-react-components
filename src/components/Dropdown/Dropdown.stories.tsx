import Dropdown from "./Dropdown";

export default {
  title: "Dropdown",
};

export const Sample = () => {
  return (
    <div style={{ width: "500px", height: "100px" }}>
      <Dropdown label="dropdown">
        <ul>
          <li>sample</li>
          <li>dropdown</li>
        </ul>
      </Dropdown>
    </div>
  );
};
