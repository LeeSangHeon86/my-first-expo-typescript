import React, { createContext, useState } from 'react';
import { ReactElement } from 'react';

const UserContext = createContext({
  name: '',
  setName: () => {},
});

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [name, setName] = useState('SangHeon');
  const value = { name, setName };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
