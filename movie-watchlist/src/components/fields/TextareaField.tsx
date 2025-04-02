import { TextareaFieldProps } from "../../interfaces/fields/FormFields.types";

/**
 * A reusable textarea input field for use with react-hook-form.
 *
 * Uses {@link TextareaFieldProps}, which extends the shared BaseFieldProps interface.
 * Renders a label, a styled <textarea> element, and an optional validation error message.
 *
 * @example
 * <TextareaField
 *   label="Description"
 *   name="description"
 *   register={register}
 *   error={errors.description}
 * />
 *
 * @see TextareaFieldProps
 */
export const TextareaField = ({
  label,
  name,
  register,
  error,
}: TextareaFieldProps) => {
  return (
    <div>
      {/* Label shown above the textarea input */}
      <label className="block text-sm font-medium text-gray-700">{label}</label>

      {/* Textarea element registered with react-hook-form */}
      <textarea
        {...(register ? register(name) : {})}
        rows={4}
        className={`mt-1 w-full px-3 py-2 border rounded shadow-sm focus:ring-2 ${
          error
            ? "border-red-500 ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />

      {/* Validation error message (if any) */}
      {error && <p className="text-sm text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};
