import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [firstname, setFirst] = useState('');
  const [lastname, setLast] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  
    function CheckEmail() {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        toast.error('Invalid email address!', {
          position: 'top-right',
          autoClose: 3000,
        });
        return false; 
      }
      return true; 
    }
  
    function CheckPass() {
      if (password !== confirm) {
        toast.error('Passwords do not match!', {
          position: 'top-right',
          autoClose: 3000,
        });
        setEmail('');
        setPassword('');
        setConfirm('');
        setFirst('');
        setLast('');
        return false;
      }
  
      if (password.length < 8) {
        toast.error('Password must be at least 8 characters long!', {
          position: 'top-right',
          autoClose: 3000,
        });
        return false;
      }
  
      let upperCount = 0;
      let lowerCount = 0;
      let zeroCount = 0;
      let specialCharCount = 0;
  
      for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i + 1]) {
          toast.error('Password contains consecutive identical characters!', {
            position: 'top-right',
            autoClose: 3000,
          });
          return false;
        }
        let ascii = password.charCodeAt(i);
        if (ascii >= 48 && ascii <= 57) {
          zeroCount++;
        } else if (ascii >= 65 && ascii <= 90) {
          upperCount++;
        } else if (ascii >= 97 && ascii <= 122) {
          lowerCount++;
        } else if (
          ascii === 33 || ascii === 64 || ascii === 35 || ascii === 36 ||
          ascii === 42 || ascii === 38 || ascii == 94 || ascii === 37 ||
          ascii === 40 || ascii === 41 || ascii === 45 || ascii == 43
        ) { 
          specialCharCount++;
        }
      }
  
      if (upperCount > 0 && lowerCount > 0 && zeroCount > 0 && specialCharCount > 0) {
        return true;
      } else {
        toast.error('Password must contain at least one uppercase, one lowercase, one digit, and one special character!', {
          position: 'top-right',
          autoClose: 3000,
        });
        return false;
      }
    }
  
    if (!CheckEmail()) return;
    if (!CheckPass()) return;
  
    // Clear the form fields
    toast.success('Form submitted successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
  
    setEmail('');
    setPassword('');
    setConfirm('');
    setFirst('');
    setLast('');
  }
  

  return (
    <div className='mt-5'>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Email address</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Password</label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Confirm password</label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={firstname}
              onChange={(e) => setFirst(e.target.value)}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >First name</label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              value={lastname}
              onChange={(e) => setLast(e.target.value)}
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Last name</label>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >Submit</button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default App;
