import Select from "src/components/Select";

export default {
  title: "Select",
  component: Select,
};

export const Sample = () => {
  return (
    <div>
      <div style={{ height: "200px" }}></div>
      <Select
        items={[
          {
            value: "test",
            label: "test",
          },
          {
            value: "test1",
            label: "test2",
          },
        ]}
        defaultValue={"test"}
      />
    </div>
  );
};
