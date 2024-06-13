import { UserCard } from "../components/UserCard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alimentateur from './Alimentateur';
import Producteur from './Producteur';
import Magasinier from './Magasinier';


export function LandingPage() {

    return (
      <>
        <div className="flex justify-center mt-6 mb-20">
          <img src="/Logo_INDO_FULL.png" className="mr-3 h-10 sm:h-14" alt="Flowbite React Logo" />
        </div>

        <div className="flex justify-center">
          <UserCard user="Alimentateur" path="/alimentateur" text="Espace pour re-approvisionner les rack de lignes de production." />     
          <UserCard user="Magasinier" path="/magasinier" text="Espace dedier au producteur afin de  ." />
        </div>
      </>
    );
    
}