import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Select from "src/components/Select";

export default {
  title: "Select",
  component: Select,
};

export const Sample = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ selected1: string; selected2: string }>({
    defaultValues: { selected1: "test1", selected2: "test2" },
  });

  const submit: SubmitHandler<{ selected1: string; selected2: string }> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div style={{ height: "200px" }}>上に選択肢だすよ</div>
      <Controller
        {...register("selected1")}
        control={control}
        render={({ field }) => (
          <Select
            ref={field.ref}
            name={field.name}
            items={Items}
            upper
            defaultValue={field.value}
            onSelect={field.onChange}
          />
        )}
      />
      <br></br>
      <Controller
        {...register("selected2")}
        control={control}
        render={({ field }) => (
          <Select
            ref={field.ref}
            name={field.name}
            items={Items}
            defaultValue={field.value}
            onSelect={field.onChange}
          />
        )}
      />
      こっちは下に選択肢だすよ
      <button>submit</button>
    </form>
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
