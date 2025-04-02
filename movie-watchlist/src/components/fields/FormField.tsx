import { FormFieldProps } from "../../interfaces/fields/FormFields.types";

/**
 * A reusable text-based input field for use with react-hook-form.
 *
 * Uses {@link FormFieldProps}, which extends the shared BaseFieldProps interface.
 * Supports custom input types such as "text", "email", "password", etc.
 * Renders a label, an <input> element, and an optional validation error message.
 *
 * @example
 * <FormField
 *   label="Email address"
 *   name="email"
 *   type="email"
 *   register={register}
 *   error={errors.email}
 * />
 *
 * @see FormFieldProps
 */
export const FormField = ({
  label,
  name,
  type = "text",
  register,
  error,
}: FormFieldProps) => {
  return (
    <div>
    {/* Label shown above the input field */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Input element bound to react-hook-form */}
    <input
      type={type}
      {...register(name)}
      className={`mt-1 w-full px-3 py-2 border rounded shadow-sm focus:ring-2 ${
        error
          ? "border-red-500 ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />

    {/* Display validation error if present */}
    {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
  </div>
  );
};
