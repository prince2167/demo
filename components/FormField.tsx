"use client";
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

interface FormFieldProps {
  item: FormField;
  register: any;
  errors: any;
}

const FormFields: React.FC<FormFieldProps> = ({ item, register, errors }) => (
  <div
    className={`form-field ${
      item?.isInLine ? "sm:col-span-2 md:col-span-3 lg:col-span-4" : ""
    }`}
  >
    <label className="block mb-1">{item?.label}</label>
    {item?.type === "input" ? (
      <input
        placeholder={item.placeholder}
        type={item.labelType}
        className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-blue-500"
        {...register(item?.name, { required: item?.required })}
      />
    ) : (
      <select
        className="border border-gray-300 rounded-md w-full px-4 py-2 focus:outline-none focus:border-blue-500"
        {...register(item.name, { required: item?.required })}
      >
        {item?.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    )}
    {errors[item?.name] && (
      <p className="text-red-500">{errors[item?.name]?.message}</p>
    )}
  </div>
);

export default FormFields;
