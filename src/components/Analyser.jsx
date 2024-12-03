import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChillGuy from '../assets/chill_guy.png';
import { useLocation } from 'react-router-dom';
import SmallCard from './SmallCard';

const Analyser = () => {
  const location = useLocation();
  const { username } = location.state || {};
  const [data, setdata] = useState({
    totalSolved: 0,
    totalQuestions: 0,
    easySolved: 0,
    totalEasy: 0,
    mediumSolved: 0,
    totalMedium: 0,
    hardSolved: 0,
    totalHard: 0,
    ranking: 0,
  });

 
 useEffect(()=>{
  const handleData=async()=>{
    try{
      const resp=await axios.get(`/${username}`)
      
      const { totalSolved, totalQuestions, easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard, ranking}=resp.data;
      setdata({ totalSolved, totalQuestions, easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard, ranking})
    }catch(err){
      console.error('error fetching data: ', err)
    }
   }
   if (username) handleData();
 },[username])
  return (
    <>
      <nav className="flex items-center justify-between bg-orange-400">
        <h1 className="text-4xl p-6 font-bold text-black font-mono rounded-xl m-2 underline">
          Welcome {username}
        </h1>
        <img src={ChillGuy} alt="Chill Leetcoder" className="w-[100px] h-auto m-4" />
      </nav>
      <div className="flex justify-around mt-8">
        <div className="bg-gray-300 rounded-2xl w-[400px] p-5 flex flex-col m-3 items-center">
          <div className="flex">
            <SmallCard a={data.totalSolved} b={data.totalQuestions} c="Total" />
            <SmallCard a={data.easySolved} b={data.totalEasy} c="Easy" />
          </div>
          <div className="flex">
            <SmallCard a={data.mediumSolved} b={data.totalMedium} c="Medium" />
            <SmallCard a={data.hardSolved} b={data.totalHard} c="Hard" />
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center p-2 mt-3">
            <h1 className="text-2xl font-semibold text-orange-400 px-3">
              Ranking <span className="text-black"> - {data.ranking}</span>
            </h1>
          </div>
        </div>
        <div className="bg-gray-300 rounded-2xl w-[400px] p-5 flex flex-col m-3 items-center">
          <h1>40% chill</h1>
        </div>
      </div>
    </>
  );
};

export default Analyser;
