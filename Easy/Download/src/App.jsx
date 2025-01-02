import React, { useState } from 'react';

const App = () => {
  const [progress, setProgress] = useState(0); // Initial progress is 0%
  const [isDownloading, setIsDownloading] = useState(false);

  
  const handleDownload = () => {
    setIsDownloading(true);
    let downloadProgress = 0;

    const interval = setInterval(() => {
      downloadProgress += 1; 

      if (downloadProgress <= 100) {
        setProgress(downloadProgress); 
      } else {
        clearInterval(interval); 
        setIsDownloading(false); 
      }
    }, 100);
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen w-80 mx-auto text-center p-4">
     
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`px-6 py-2 mb-4 rounded text-white font-semibold transition ${
          isDownloading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isDownloading ? 'Downloading...' : 'Download'}
      </button>

    
      <div className="w-full h-5 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-100 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

     
      <p className="mt-2 text-gray-700">{progress}%</p>
    </div>
  );
};

export default App;
