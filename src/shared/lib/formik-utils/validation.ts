import { range, inRange, get, isObject } from "lodash";
import { addMethod, array, boolean, date, number, string } from "yup";

// declare module "yup" {
//   interface ArraySchema<T> {
//     unique(message: string, mapper: (a: any) => any): ArraySchema<T>;
//   }
// }

// addMethod(
//   array,
//   "unique",
//   function (message: string, mapper = (a: any): any => a) {
//     return this.test("unique", message, (list: any[] | null | undefined) =>
//       list ? list.length === new Set(list.map(mapper)).size : true
//     );
//   }
// );

export const validateBoolean = (isRequired?: boolean) => {
  let schema = boolean().nullable();
  if (isRequired) {
    schema = schema.required("Required Field");
  }
  return schema;
};

export const validateDate = (isRequired?: boolean) => {
  let schema = date().nullable();
  if (isRequired) {
    schema = schema.required("Required Field");
  }
  return schema;
};

export type ValidationRule<Type> =
  | Type
  | {
      value: Type;
      message: string;
    };
export interface NumberValidationOptions {
  min?: ValidationRule<number>;
  max?: ValidationRule<number>;
  greaterThan?: ValidationRule<number>;
  lessThan?: ValidationRule<number>;
  integer?: boolean | string;
  positive?: boolean | string;
  negative?: boolean | string;
}
const unwrapValidationRule = <T>(
  rule: ValidationRule<T>
): [T, string | undefined] => {
  if (isObject(rule) && rule.value && rule.message) {
    return [rule.value, rule.message];
  } else {
    return [rule as T, undefined];
  }
};
export const validateNumber = (
  isRequired?: boolean,
  options?: NumberValidationOptions
) => {
  let schema = number().nullable();
  if (isRequired) {
    schema = schema.required("Required Field");
  }
  if (options) {
    if (options.min) {
      const [val, message] = unwrapValidationRule(options.min);
      schema = schema.min(val, message || `Must be not less than ${val}`);
    }
    if (options.max) {
      const [val, message] = unwrapValidationRule(options.max);
      schema = schema.max(val, message || `Must be not greater than ${val}`);
    }
    if (options.greaterThan) {
      const [val, message] = unwrapValidationRule(options.greaterThan);
      schema = schema.moreThan(val, message || `Must be greater than ${val}`);
    }
    if (options.lessThan) {
      const [val, message] = unwrapValidationRule(options.lessThan);
      schema = schema.lessThan(val, message || `Must be less than ${val}`);
    }
    if (options.integer) {
      schema = schema.integer(
        typeof options.integer === "string"
          ? options.integer
          : "Must be integer value"
      );
    }
    if (options.positive) {
      schema = schema.positive(
        typeof options.positive === "string"
          ? options.positive
          : "Must be positive value"
      );
    }
    if (options.negative) {
      schema = schema.negative(
        typeof options.negative === "string"
          ? options.negative
          : "Must be negative value"
      );
    }
  }

  return schema;
};

export interface StringValidationOptions {
  min?: ValidationRule<number>;
  max?: ValidationRule<number>;
  length?: ValidationRule<number>;
}
export const validateString = (
  isRequired?: boolean,
  options?: number | StringValidationOptions
) => {
  const isRulesObject = (val: typeof options): val is StringValidationOptions =>
    isObject(val);

  let schema = string().nullable();

  if (isRequired) {
    schema = schema.required("Required Field");
  }
  if (options) {
    // for backward compatibility, if second argument is number, then treat it as 'max' rule
    const max = isRulesObject(options) ? options.max : options;
    if (max) {
      const [value, message] = unwrapValidationRule(max);
      schema = schema.max(
        value,
        message || `The field should not contain more than ${max} characters`
      );
    }
    if (isRulesObject(options)) {
      if (options.min) {
        const [value, message] = unwrapValidationRule(options.min);
        schema = schema.min(
          value,
          message || `The field should not contain less than ${max} characters`
        );
      }
      if (options.length) {
        const [value, message] = unwrapValidationRule(options.length);
        schema = schema.length(
          value,
          message || `The field requires ${value} characters`
        );
      }
    }
  }
  return schema;
};
