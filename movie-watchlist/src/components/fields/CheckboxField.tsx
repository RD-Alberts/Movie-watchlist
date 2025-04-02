import { CheckboxFieldProps } from "../../interfaces/fields/FormFields.types";

/**
 * A reusable checkbox input field for use with react-hook-form.
 *
 * Uses {@link CheckboxFieldProps}, which extends the shared BaseFieldProps interface.
 * Renders a checkbox input with an associated label and an optional validation error message.
 *
 * @example
 * <CheckboxField
 *   label="I agree to the terms"
 *   name="terms"
 *   register={register}
 *   error={errors.terms}
 * />
 *
 * @see CheckboxFieldProps
 */
export const CheckboxField = ({
  label,
  name,
  register,
  error,
}: CheckboxFieldProps) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Checkbox input registered with react-hook-form */}
      <input type="checkbox" {...(register ? register(name) : {})} />

      {/* Label displayed next to the checkbox */}
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {/* Optional validation error message */}
      {error && <p className="text-sm text-red-500 ml-2">{error.message}</p>}
    </div>
  );
};
