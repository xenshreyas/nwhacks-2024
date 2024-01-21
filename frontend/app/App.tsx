import dynamic from 'next/dynamic';
import React from 'react';
import Red from '../components/Red';
import Green from '../components/Green';
import Cards from '@/components/Cards';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center">
  <div className="lg:w-1/4">
    <Red />
  </div>
  <div className="md:w-1/4">
    <Green />
  </div>
  <div className="w-full md:w-1/2 mx-auto">
    <Cards />
  </div>
</div>


  );
};

export default App;
