import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ErrorState {
  errors: Record<string, string>;
  setError: (key: string, message: string) => void;
  clearError: (key: string) => void;
  hasError: () => boolean;
}

const useErrorStore = create<ErrorState>()(
  devtools(
    immer((set, get) => ({
      errors: {},
      clearError: key => {
        set(state => {
          delete state.errors[key];
        });
      },
      setError: (key, message) => {
        set(state => {
          state.errors[key] = message;
        });
      },
      hasError: () => Object.keys(get().errors).length > 0,
    })),
    { name: "errorStore" }
  )
);

export default useErrorStore;
