import { userActionsType } from "./user.types";

export const setCurrentUser = user => {
  return {
    type: userActionsType.SET_CURRENT_USER,
    payload: user
  };
};
