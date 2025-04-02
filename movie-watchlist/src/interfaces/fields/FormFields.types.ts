import { UseFormRegister, FieldError } from "react-hook-form";

/**
 * Common props shared by all form field components.
 *
 * Includes:
 * - `label`: The label text shown to the user
 * - `name`: The name used by react-hook-form for registration
 * - `register`: The react-hook-form register function
 * - `error`: Optional validation error object
 */
export interface BaseFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

/**
 * Props for a standard text input field.
 *
 * Extends {@link BaseFieldProps}
 */
export interface FormFieldProps extends BaseFieldProps {
  /** The input type, e.g. "text", "email", "password" */
  type?: string;
}

/**
 * Props for a select dropdown field.
 *
 * Extends {@link BaseFieldProps}
 */
export interface SelectFieldProps extends BaseFieldProps {
  /** The list of options to display in the dropdown */
  options: string[];
}

/**
 * Props for a multi-select field component.
 *
 * Extends {@link BaseFieldProps}
 */
export interface MultiSelectFieldProps extends BaseFieldProps {
  /** The available options to select from */
  options: string[];

  /** Optional individual error messages for selected items */
  itemErrors?: (FieldError | undefined)[];
}

/**
 * Props for a textarea field.
 *
 * Extends {@link BaseFieldProps}
 */
export interface TextareaFieldProps extends BaseFieldProps {}

/**
 * Props for a checkbox field.
 *
 * Extends {@link BaseFieldProps}
 */
export interface CheckboxFieldProps extends BaseFieldProps {}

/**
 * Props for a date input field.
 *
 * Extends {@link BaseFieldProps}
 */
export interface DateFieldProps extends BaseFieldProps {}
