import { useState } from "react";
import { ZodSchema } from "zod";

import { TextFieldConfig } from "@/@types/store";
import useErrorStore from "@/lib/store/errorStore";

export const useValidatedField = (
  value: TextFieldConfig,
  setValue: (val: Partial<TextFieldConfig>) => void,
  schema: ZodSchema<string>
) => {
  const [error, setError] = useState<string | null>(null);
  const { setError: setGlobalError, clearError: clearGlobalError } = useErrorStore();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    const newlineCount = (newValue.match(/\n/g) || []).length;
    if (newlineCount > 6) {
      setError("Input cannot contain more than 6 new lines.");
      setGlobalError("input", "Input cannot contain more than 6 new lines.");
      return;
    }

    const result = schema.safeParse(newValue);

    if (!result.success) {
      const message = result.error.errors[0].message;
      setError(message);
      setGlobalError("input", message);
    } else {
      setError(null);
      clearGlobalError("input");
    }

    setValue({ text: newValue });
  };

  return {
    value: value.text,
    error,
    handleOnChange,
  };
};
