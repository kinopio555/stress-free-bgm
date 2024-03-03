import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import auth, { provider } from "../../firebase"
import SignInButton from "./components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth"
import SignOutButton from "./components/SignOutButton";
import  UserInfo  from "./components/UserInfo";
import SelectArea from "./components/SelectArea";
import { useEffect, useState } from "react";

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
    .then(a => a.weather?.[0]?.main)
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

  return (
    <div style={{marginTop: '5%', marginLeft: '10%'}}>
    <h1 style={{marginBottom: '7%'}}>stress free BGM</h1>    
    {user ? (
      <>
        <UserInfo auth={auth} />
        <SignOutButton />       
        <form>
        <SelectArea weather={weather} />
        </form>
      </>
    ): (
      <>
        <SignInButton auth={auth} provider={provider} />
      </>
    )}
    </div>
  );
}
