import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChillGuy from '../assets/chill_guy.png';
import { useLocation } from 'react-router-dom';
import SmallCard from './SmallCard';
import Footer from './Footer';
import Gif from './Gif';

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
  const [loading, setloading] = useState(true)
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
      console.log(response.data);
      const {
        totalSolved,
        totalQuestions,
        easySolved,
        totalEasy,
        mediumSolved,
        totalMedium,
        hardSolved,
        totalHard,
        ranking,
      } = response.data;
      setdata({
        totalSolved,
        totalQuestions,
        easySolved,
        totalEasy,
        mediumSolved,
        totalMedium,
        hardSolved,
        totalHard,
        ranking,
      });
     setloading(false)
    } catch (err) {
      console.error('Error fetching data:', err);
      setloading(false)
    }
  };

  useEffect(() => {
    if (username) fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <Gif/>
      </div>
    );
  }

  const getChillness = () => {
    const { mediumSolved, easySolved, hardSolved, totalSolved, totalQuestions, ranking } = data;

    if (mediumSolved > easySolved && hardSolved >= 50) {
      return {
        chillness: '100%',
        description:
          "Absolute 100% certified chill king! You're out here solving hard problems like they're warm-up stretches. Your grind? Pure Sigma vibes!  Staying cool under pressure, and always on top of your game. ",
      };
    } else if (mediumSolved > easySolved && hardSolved > 25) {
      return {
        chillness: '90%',
        description:
          "Yo, you’re a 90% chill legend. You’re crushing the medium-level problems while leaving easy ones in your rearview mirror. Hard problems? You ain’t scared. You’re basically a chill machine on a mission.",
      };
    } else if (mediumSolved > 100 && hardSolved > 18) {
      return {
        chillness: '85%',
        description:
          "85% chill vibes, no cap. You’re that person who skips the easy stuff, going straight for the hard and medium problems. You’ve got that 'I don’t do easy' energy, and we love to see it. Chill but fierce.",
      };
    } else if (easySolved > mediumSolved && hardSolved > 15) {
      return {
        chillness: '70%',
        description:
          "70% chill, but lowkey you’re flexing on the easy problems. A little bit try-hard but like, in a chill way. You’re out here solving problems, but you still vibe, you know? Respect.",
      };
    } else if (easySolved > mediumSolved && hardSolved < 10) {
      return {
        chillness: '50%',
        description:
          "50% chill, but you’re out here drinking LaCroix — just vibing, barely there. Easy problems? You’ve got that on lock, but you’re avoiding the hard stuff like it’s a family dinner with no WiFi. We see you.",
      };
    } else if (totalSolved > 500 && hardSolved < 50) {
      return {
        chillness: '60%',
        description:
          "60% chill, working hard but avoiding the spicy stuff. You’re cruising through life, solving questions without breaking a sweat, but you keep it safe with the medium and easy stuff. Not bad, not bad.",
      };
    } else if (hardSolved > 75 && ranking < 1000) {
      return {
        chillness: '95%',
        description:
          "95% chill. You’ve solved more hard problems than most of us combined, and your ranking is flex-worthy. LeetCode respects you. If chillness was a skill, you’d be a world champion. Respect the grind, king.",
      };
    } else if (mediumSolved + easySolved > 300 && hardSolved === 0) {
      return {
        chillness: '40%',
        description:
          "40% chill, just out here having fun but without the spice. You’re enjoying the easy stuff but avoiding the hard problems like they’re a Monday morning. Chill, but you gotta step it up.",
      };
    } 
    // else if (totalQuestions - totalSolved < 50) {
    //   return {
    //     chillness: '80%',
    //     description:
    //       "80% chill. Problems fear you. You’ve solved most of them, but the rest are just sitting there like 'I’m next, I swear. Respect, but don’t get cocky.",
    //   };
    // } 
    // else if (ranking > 10000 && hardSolved > 0) {
    //   return {
    //     chillness: '30%',
    //     description:
    //       "30% chill. Minimal effort energy, but you’ve still got some hard problems under your belt. You’re more of a 'chill but could do more' type. It’s all good, though, just keep going and you’ll reach 50% in no time!",
    //   };
    // } 
    else {
      return {
        chillness: 'Unknown',
        description:
          "Chill status: unknown. You’re sneaking through the challenges, but we need a little more data to figure out if you’re chill or if you’re still just warming up. Keep coding, and the chillness will follow!",
      };
    }
  };

  const { chillness, description } = getChillness();

  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800">
        <h1 className="text-4xl p-6 font-bold text-white  rounded-xl m-2  hover:text-green-600">
          Welcome  {username} !
        </h1>
        <img src={ChillGuy} alt="Chill Leetcoder" className="w-[100px] h-auto m-4" />
      </nav>
      <div className="flex justify-center mt-8">
        <div className="bg-gray-800 rounded-2xl w-[400px] p-5 flex flex-col m-3 items-center mr-20">
          <div className="flex">
            <SmallCard a={data.totalSolved} b={data.totalQuestions} c="Total" />
            <SmallCard a={data.easySolved} b={data.totalEasy} c="Easy" />
          </div>
          <div className="flex">
            <SmallCard a={data.mediumSolved} b={data.totalMedium} c="Medium" />
            <SmallCard a={data.hardSolved} b={data.totalHard} c="Hard" />
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center p-2 mt-3 hover:bg-green-300">
            <h1 className="text-2xl font-bold text-orange-400 px-3 ">
              Ranking <span className="text-black font-semibold"> - {data.ranking}</span>
            </h1>
          </div>
        </div>
        <div className="bg-gray-800 rounded-2xl w-[600px] p-5 flex flex-col m-3 items-center ml-20 ">
          <h1 className="text-3xl font-bold text-orange-400 bg-white  rounded-xl flex items-center justify-center px-4 py-2 mt-2 hover:bg-green-300">{chillness} Chill Leetcoder</h1>
          <p className="text-xl text-black mt-4 font-semibold font-mono bg-white  rounded-xl flex items-center justify-center p-4 mt-3 hover:bg-green-300">{description}</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Analyser;
