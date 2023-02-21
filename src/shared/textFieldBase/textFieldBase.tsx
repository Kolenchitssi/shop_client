import { memo, useCallback } from "react";

import {
  IconButton,
  TextField as MUITextField,
  InputAdornment,
} from "@mui/material";

interface TextFieldBaseProps {
  value: string;
  isSubmitKeyAllowed?: boolean;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const TextFieldBase: React.FunctionComponent<TextFieldBaseProps> = memo(
  (props) => {
    const {
      value,
      isLoading = false,
      isClearable = true,
      withOnFocus = true,
      onFocus = () => {},
      isSubmitKeyAllowed = false,
    } = props;

    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        if (withOnFocus) {
          event.preventDefault();
          const textInput = event.target as HTMLInputElement;
          textInput.select();
        }
        onFocus(event);
      },
      [withOnFocus, onFocus]
    );
    return (
      <MUITextField
        value={value}
        onFocus={handleFocus}
        onKeyDown={
          isSubmitKeyAllowed
            ? undefined
            : (e) => e.key === "Enter" && e.preventDefault()
        }
      />
    );
  }
);

TextFieldBase.displayName = "TextFieldBase";

export default TextFieldBase;
