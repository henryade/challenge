import React from "react";

type DispatchUserContextT = any;

interface SetUsersT {
  action: "set";
  payload: UserT;
}

export interface UserT {
  email: string;
  name: string;
}

export const DispatchUserContext =
  React.createContext<DispatchUserContextT | null>(null);
export const UserContext = React.createContext<UserT | null>(null);

const reducer = (state: UserT | null, update: SetUsersT): UserT | null => {
    return state;
};

const UserProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, {
    name: "olivia rhye",
    email: "olivia@untitledui.com"
  });


  return (
    <DispatchUserContext.Provider value={dispatch}>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </DispatchUserContext.Provider>
  );
};

export default UserProvider;
