import { MultiSelectFieldProps } from "../../interfaces/fields/FormFields.types";


/**
 * A reusable multi-select input field for use with react-hook-form.
 *
 * Uses {@link MultiSelectFieldProps}, which extends the shared BaseFieldProps interface.
 * Renders a <select multiple> element with provided options and displays both
 * a general field-level validation error and optional per-item validation errors.
 *
 * @example
 * <MultiSelectField
 *   label="Tags"
 *   name="tags"
 *   options={['Bug', 'Feature', 'Improvement']}
 *   register={register}
 *   error={errors.tags}
 *   itemErrors={errors.tags?.map((e) => e)}
 * />
 *
 * @see MultiSelectFieldProps
 */
export const MultiSelectField = ({
  label,
  name,
  options,
  register,
  error,
  itemErrors,
}: MultiSelectFieldProps) => {
  return (
    <div>
    {/* Label shown above the multi-select input */}
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    {/* Multi-select field bound to react-hook-form */}
    <select
      multiple
      {...register(name)}
      className={`mt-1 w-full px-3 py-2 border rounded shadow-sm focus:ring-2 h-32 ${
        error
          ? "border-red-500 ring-red-500"
          : "border-gray-300 focus:ring-blue-500"
      }`}
    >
      {/* Render each option in the dropdown */}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    {/* General validation error (e.g. "At least one option is required") */}
    {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}

    {/* Display individual validation errors for selected options (if any) */}
    {itemErrors?.map(
      (itemError, index) =>
        itemError && (
          <p key={index} className="text-sm text-red-500 mt-1">
            • {itemError.message}
          </p>
        )
    )}
  </div>
  );
};
