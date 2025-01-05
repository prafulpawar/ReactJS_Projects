import React from 'react'
// import KeyboardEventExample from './compoents/Ktrack'
function App() {
  const GlobalKeyboardEvent = () => {
    const [key, setKey] = useState('');
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        setKey(e.key);
      };
  
      window.addEventListener('keydown', handleKeyDown);
  
      // Cleanup listener on unmount
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
  return (
    //  <KeyboardEventExample/>
        <div onKeyDown={GlobalKeyboardEvent} className="h-screen flex justify-center items-center">
          <h1>Key Pressed: {key}</h1>
        </div>
  )
}
}

export default App