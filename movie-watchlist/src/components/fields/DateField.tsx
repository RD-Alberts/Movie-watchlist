import { DateFieldProps } from "../../interfaces/fields/FormFields.types";

/**
 * A reusable date input field for use with react-hook-form.
 *
 * Uses {@link DateFieldProps}, which extends the shared BaseFieldProps interface.
 * Renders a label, an <input type="date"> element, and an optional validation error message.
 *
 * @example
 * <DateField
 *   label="Due date"
 *   name="dueDate"
 *   register={register}
 *   error={errors.dueDate}
 * />
 *
 * @see DateFieldProps
 */
export const DateField = ({ label, name, register, error }: DateFieldProps) => {
  return (
    <div>
    {/* Label shown above the date input */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Date input element bound to react-hook-form */}
    <input
      type="date"
      {...register(name)}
      className={`mt-1 w-full px-3 py-2 border rounded shadow-sm focus:ring-2 ${
        error
          ? "border-red-500 ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    />

    {/* Validation error message (if present) */}
    {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
  </div>
  );
};
