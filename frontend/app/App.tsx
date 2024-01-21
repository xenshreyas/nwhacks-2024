import dynamic from 'next/dynamic';
import React from 'react';
import Red from '../components/Red';
import Green from '../components/Green';
import Feed from '../components/Feed';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <Red />
      <Feed />
      <Green />
    </div>
  );
};

export default App;
