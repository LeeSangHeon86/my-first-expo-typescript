import React, { useState, createContext } from 'react';

const UserContext = createContext({
  user: { uid: null },
  setUser: uid => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserInfo] = useState({ uid: null });
  const setUser = ({ uid }: { uid: string }) => {
    setUserInfo({ uid });
  };
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
