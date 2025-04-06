import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './image/logo.png';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate('/Home');
        }
        return prev + 10;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className=" xl:hidden 2xl:hidden lg:hidden flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={logo} alt="Logo" className= "w-32 h-32 mb-4 rounded-full" />
      <div className="w-3/4 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500" style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
