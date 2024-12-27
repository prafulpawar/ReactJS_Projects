// import React, { useState, useEffect, useMemo } from 'react';
// import useSound from 'use-sound';
// import background from './assets/images/background.jpg';

// import boom from './assets/sounds/boom.wav';
// import clap from './assets/sounds/clap.wav';
// import hihat from './assets/sounds/hihat.wav';
// import kick from './assets/sounds/kick.wav';
// import openhat from './assets/sounds/openhat.wav';
// import snare from './assets/sounds/snare.wav';
// import tom from './assets/sounds/tom.wav';
// import tink from './assets/sounds/tink.wav';

// const App = () => {
//   const [playClap] = useSound(clap);
//   const [playHihat] = useSound(hihat);
//   const [playKick] = useSound(kick);
//   const [playOpenhat] = useSound(openhat);
//   const [playBoom] = useSound(boom);
//   const [playSnare] = useSound(snare);
//   const [playTom] = useSound(tom);
//   const [playTink] = useSound(tink);

//   const useKeyboardBindings = (map) => {
//     useEffect(() => {
//       const handlePress = (ev) => {
//         const handler = map[ev.key];
//         if (typeof handler === 'function') {
//           handler();
//         }
//       };

//       window.addEventListener('keydown', handlePress);
//       return () => {
//         window.removeEventListener('keydown', handlePress);
//       };
//     }, [map]);
//   };

//   const keyMap = useMemo(() => ({
//     a: playClap,
//     s: playHihat,
//     d: playKick,
//     f: playOpenhat,
//     g: playBoom,
//     j: playSnare,
//     k: playTom,
//     l: playTink,
//   }), []);

//   useKeyboardBindings(keyMap);

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         width: '100vw',
//       }}
//     >
//       <div className='flex justify-center items-center h-screen gap-3'>
//         {[['A', 'CLAP', playClap], ['S', 'HIHAT', playHihat], ['D', 'KICK', playKick], ['F', 'OPENHAT', playOpenhat], ['G', 'BOOM', playBoom], ['J', 'SNARE', playSnare], ['K', 'TOM', playTom], ['L', 'TINK', playTink]].map(([key, label, sound]) => (
//           <div
//             key={key}
//             onMouseDown={sound}
//             className='border-4 border-black p-3 text-center w-20 h-20 flex justify-center items-center flex-col hover:border-yellow-500'
//           >
//             <h1 className='font-bold text-white text-3xl'>{key}</h1>
//             <p className='text-yellow-300 font-bold'>{label}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


