import { InputHTMLAttributes, useContext, useEffect, useRef } from "react";

import { FormContext } from "./FormContext";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ref?: React.Ref<HTMLInputElement> | null;
}

export const Input = (props: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { RegisterField } = useContext(FormContext);

  // useEffect(() => {
  // if (inputRef.current) {
  // RegisterField(props.name, inputRef.current);
  // }
  // }, [props.name, RegisterField]);

  return <input {...props} name={props.name} ref={inputRef} />;
};
