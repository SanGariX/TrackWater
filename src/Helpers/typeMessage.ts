import { useEffect } from "react";

export const useEffectTypeError = (setStateError: any, errors: any) => {
  useEffect(() => {
    if (!!errors.email?.message) {
      setStateError(errors.email?.message);
    }else if (!!errors.password?.message) {
      setStateError(errors.password?.message);
    } else if (!!errors["repeat-password"]?.message) {
      setStateError(errors["repeat-password"]?.message);
    } else {
      setStateError(false);
    }
  }, [
    errors.email?.message,
    errors.password?.message,
    errors["repeat-password"]?.message,
  ]);
};
