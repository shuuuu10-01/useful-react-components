import Select from "src/components/Select";

export default {
  title: "Select",
  component: Select,
};

export const Sample = () => {
  return (
    <div>
      <div style={{ height: "200px" }}>上に選択肢だすよ</div>
      <Select items={Items} upper defaultValue={"test1"} />
      <br></br>
      <Select items={Items} defaultValue={"test1"} />
      こっちは下に選択肢だすよ
    </div>
  );
};

const Items = [
  {
    value: "test1",
    label: "test1",
  },
  {
    value: "test2",
    label: "test2",
  },
  {
    value: "test3",
    label: "test3",
  },
  {
    value: "test4",
    label: "test4",
  },
  {
    value: "test5",
    label: "test5",
  },
];
