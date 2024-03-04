"use client";

import { z } from "zod";
import FormFields from "./FormField";

interface Option {
  value: string;
  label: string;
}

interface FormField {
  id: number;
  label: string;
  name: string;
  type: string;
  labelType: string;
  placeholder: string;
  required: boolean;
  isInLine: boolean;
  options?: Option[];
}

interface FormData {
  id: number;
  category: string;
  data: FormField[];
  validationSchema: z.Schema<any>;
}

interface CategoryFieldsProps {
  constant: FormData;
  register: any;
  errors: any;
}

const CategoryFields: React.FC<CategoryFieldsProps> = ({
  constant,
  register,
  errors,
}) => (
  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
    <h1 className="font-bold">{constant?.category}</h1>
    {constant?.data.map((item) => (
      <FormFields
        key={item.id}
        item={item}
        register={register}
        errors={errors}
      />
    ))}
  </div>
);

export default CategoryFields;
