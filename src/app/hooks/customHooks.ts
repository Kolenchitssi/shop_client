import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
type TValue = string | null | undefined;

interface IValidations {
  [key: string]: any;
}

const useValidation = (value: TValue, validations: IValidations) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value && value.length < validations[validation]) {
            setHasError(true);
            setErrorMesssage(`Длинна не менее ${validations[validation]}`);
          } else {
            !errorMessage && setHasError(false);
          }
          break;
        case "isEmpty":
          const canIsEmpty = validations[validation];
          if (!value && !canIsEmpty) {
            setHasError(true);
            setErrorMesssage("Поле не может быть пустым");
          } else {
            !errorMessage && setHasError(false);
          }
          break;
        case "isEmail":
          const isEmail = validations[validation];
          const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          if (isEmail && reg.test(String(value).toLowerCase())) {
            setHasError(true);
            setErrorMesssage("Некорректный email");
          } else {
            !errorMessage && setHasError(false);
          }
          break;

        default:
          break;
      }
    }
  }, [value, validations]);

  return {
    hasError,
    errorMessage,
  };
};

export const useInput = (
  initialValue: TValue,
  validation: IValidations = {}
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validation);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

//example use
// const email=useInput('',{isEmpty: true, minLength: 3})
// {email.isDirty && email.hasError && <div style={{color: red}}> email.errorMessage</div> }
// <input onChange={e=>email.onChange(e)} onBlur={e=>email.onBlur(e)} value={email.value}>
