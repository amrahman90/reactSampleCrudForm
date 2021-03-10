import React from 'react';
import imagename from "@/assets/logos/QSMP_RGB.jpg";
import './App.scss';

const App: React.FunctionComponent = () => {
  return (
    <>
    <img src={imagename} /> 

    <div>
       <p className="hello-text">Hello from react!</p>
     </div>

    <h1> My React with TypeScript App!! {new Date().toLocaleDateString()}</h1>
    </>
  )
};

export default App;