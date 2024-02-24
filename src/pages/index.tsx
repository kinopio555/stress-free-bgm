import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { auth, provider } from "../firebase"
import SignInButton from "./components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth"
import SignOutButton from "./components/SignOutButton";
import  UserInfo  from "./components/UserInfo";
import SelectArea from "./components/SelectArea";
import { useEffect, useState, useRef } from "react";

type App1Props = {
  audioRef: any;
}
const App1:React.FC<App1Props> = ({audioRef}) => {
  return (
      <div>
          <audio ref={audioRef} src="./../music/sunnymorning.mp3" controls></audio>
      </div>
  );
}




export default function Home() {
  const APIKey = "66a11b3469e1028bcfd1e3ac79013ad4"
  const tokyo = 'Tokyo'
  const london = 'London'
  const los_angels = 'LosAngels'
  const new_york = 'NEW YORK'
  const weatherApi = async(lat:any, lon:any) => {
    
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`)
    .then(response => {
      const a = response.json()
      return a
    })
    .then(a => a.weather[0].main)
  }  

  const [weather, setWeather] = useState<string[]>([]);

  useEffect(() => {
    // 非同期関数を定義
    const fetchWeather = async () => {
      // const tokyo = 'Tokyo';
      const response1 = await weatherApi(	35.689,139.692); // weatherApiは非同期関数
      const response2 = await weatherApi(51.5073, -.1277); // weatherApiは非同期関数
      const response3 = await weatherApi(34.0194, -118.411); // weatherApiは非同期関数
      const response4 = await weatherApi(40.7127, -74.0059); // weatherApiは非同期関数
      setWeather([response1, response2, response3, response4]); // 状態を更新
    };

    fetchWeather(); // 非同期関数を呼び出し
  }, []);

  const [user] = useAuthState(auth)
  const ref = useRef<HTMLAudioElement>(null);
  return (
    <>
    <h1>stress free BGM</h1>
    <App1 audioRef={ref} />
    <button onClick={() => ref.current?.play()}>START</button>
    <audio src="../../music/sunnymorning.mp3" id="audio1"></audio>
    <audio src="../../music/cloudymorning.mp3" id="audio2"></audio>
    <audio src="../../music/rainymorning.mp3" id="audio3"></audio>
    <audio src="../../music/sunnyday.mp3" id="audio4"></audio>
    <audio src="../../music/cloudyday.mp3" id="audio5"></audio>
    <audio src="../../music/rainyday.mp3" id="audio6"></audio>
    <audio src="../../music/sunnynight.mp3" id="audio7"></audio>
    <audio src="../../music/cloudynight.mp3" id="audio8"></audio>
    <audio src="../../music/rainynight.mp3" id="audio9"></audio>
    
    {user ? (
      <>
        <UserInfo auth={auth} />
        <SignOutButton />
        {/* <StartButton /> */}
        <form>
        <SelectArea weather={weather} />
        </form>
        <h3>attention</h3>
        <p>summer time is not considered</p>
      </>
    ): (
      <>
        <SignInButton auth={auth} provider={provider} />
      </>
    )}
    </>
  );
}
