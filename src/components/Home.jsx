  import React, { useState } from 'react'
  import ChillGuy from '../assets/chill_guy.png'
  import 'react-toastify/dist/ReactToastify.css'
  import { ToastContainer, toast } from 'react-toastify';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios'
import Footer from './Footer';
  const Home = () => {
    const [username, setUsername] = useState('sanyadoda')
    const navigate=useNavigate();
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleIp();
      }
    };
    const handleIp=async ()=>{
      if(username.trim()===''){
        toast.error('Please enter your username first!',  {
          position: "top-left"
        });
        return ;
      }
      
      try{
        const response=await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      
        if (response.data.errors && response.data.errors.length > 0) {
          console.log('Error in response:', response.data.errors);
          toast.error('Username doesn\'t exist on leetcode.');
          return;
        }
        else if(response.data && response.data.totalSolved!==0){
          console.log('Username is valid!');
          
        
          navigate('/analyser', {state:{username }});
        }
      }catch(err){
        toast.error('Invalid username entered. Please try again!')
      }
    }
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        {/* Card */}
        <div className="bg-white w-[600px] h-auto p-7 rounded-xl shadow-lg flex flex-col items-center ml-8">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">Are you a chill leetcoder?</h1>
          <h2 className="text-lg text-gray-700 mb-6 font-semibold">Find Out Whether You're a Vibe or Simply a Coder</h2>
          <input
            type="text" value={username} onChange={(e)=>setUsername(e.target.value)} onKeyDown={handleKeyDown}
            placeholder="Enter your LeetCode username"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" required
          />
          <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-md  hover:scale-90 text-xl font-semibold" onClick={handleIp} >
            Analyze
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center ">
          {/* <img src={ChillGuy}  alt="Chill Leetcoder" className="w-[750px] h-auto" /> */}
        </div>
        <ToastContainer  />
        {/* <Footer/> */}
      </div>
    )
  }

  export default Home
