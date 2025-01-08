import React, { useState } from 'react'
import axios from 'axios'
import { GoogleGenerativeAI } from "@google/generative-ai";


function App() {
  const [inputData, setInputData] = useState('');
  const [data, setData] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const genAI = new GoogleGenerativeAI("__________________________");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
      

      const result = await model.generateContent(inputData);
     
      setData(result.response.text());
      console.log(result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
    }



  };

  return (
    <div className='flex flex-col h-screen bg-red-300'>
      <form onSubmit={handleSubmit} className='flex flex-col w-48 gap-10 m-10'>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Enter input"
        />

        <input type="file" name="" id="" 
         
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        
        
        

        <button className='border-2' type="submit">Submit</button>
      </form>

      <div>
        <p>Generated Paragraph:</p>
        <p>{data}</p>
      </div>
    </div>
  )
}

export default App;

