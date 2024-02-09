import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { auth, provider } from "../firebase"
import SignInButton from "./components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth"
import SignOutButton from "./components/SignOutButton";
import  UserInfo  from "./components/UserInfo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user] = useAuthState(auth)
  return (
    <>
    <h1>stress free BGM</h1>
    {user ? (
      <>
        <UserInfo auth={auth} />
        <SignOutButton />
      </>
    ): (
      <SignInButton auth={auth} provider={provider} />
    )}
    </>
  );
}
