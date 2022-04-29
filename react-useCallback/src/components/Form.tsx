import { useState, useCallback } from "react";

import { FormContext } from "./FormContext";
import { InputProps } from "./Input";

type Props = {
  children: React.ReactNode;
};

export const Form = ({ children }: Props) => {
  const [inputs, setInputs] = useState<InputProps[]>([]);

  const RegisterField: InputProps = useCallback(({ name, ref }) => {
    // setInputs([...inputs, { name, ref }]);
    setInputs((oldInputs) => [...oldInputs, { name, ref }]);
  }, []);

  return (
    <form>
      <FormContext.Provider value={{ RegisterField }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};
