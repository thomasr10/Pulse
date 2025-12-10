import { useState, useEffect } from "react";
import HomeConnected from "./HomeConnected";
import LandingPage from "./LandingPage";
import Header from "../components/Header";
import { useUser } from "../../context/UserContext";

export default function Homepage() {

    const { isAuth, user } = useUser();

    if (isAuth === null) return <p>Chargement...</p>;

    return isAuth ? <HomeConnected user={user} /> :
        <>
            <Header />
            <LandingPage />
        </>

}