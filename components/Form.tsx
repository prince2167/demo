"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import CategoryFields from "./CategoryFields";
import { constants } from "@/constants/data";

interface FormInputs {
  [key: string]: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {constants.map((constant: any) => (
        <CategoryFields
          key={constant?.id}
          constant={constant}
          register={register}
          errors={errors}
        />
      ))}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
