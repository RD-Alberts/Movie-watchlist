import { SelectFieldProps } from "../../interfaces/fields/FormFields.types";

/**
 * A reusable select dropdown component for use with react-hook-form.
 *
 * Uses {@link SelectFieldProps}, which extends the shared BaseFieldProps interface.
 * Renders a label, a <select> element with provided options, and an optional validation error message.
 *
 * @see SelectFieldProps
 *
 * @example
 * <SelectField
 *   label="Priority"
 *   name="priority"
 *   options={['Low', 'Medium', 'High']}
 *   register={register}
 *   error={errors.priority}
 * />
 */

export const SelectField = ({
  label,
  name,
  options,
  register,
  error,
  value,
  onChange,
}: SelectFieldProps) => {
  return (
    <div>
      {/* Label shown above the select dropdown */}
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Select input bound to react-hook-form with dynamic error styling */}
      <select
        {...(register ? register(name) : {})}
        value={value}
        onChange={onChange}
        className={`mt-1 w-full px-3 py-2 border rounded shadow-sm focus:ring-2 ${
          error
            ? "border-red-500 ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      >
        {/* Render dropdown options */}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Display validation error if present */}
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};
