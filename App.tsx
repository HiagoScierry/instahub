import React from 'react';

import Routes from './src/Routes';
import {UserProvider} from './src/Context/user';

const App = () => {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
};

export default App;
