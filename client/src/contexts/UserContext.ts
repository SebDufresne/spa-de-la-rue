import React from 'react';

import { UserContextTS } from './types';

export const UserContext = React.createContext<UserContextTS>({
  userInfo: null,
  setUserInfo: (info) => {},
});