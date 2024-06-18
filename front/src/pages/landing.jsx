import { UserCard } from "../components/UserCard"


export function LandingPage() {

    return (
      <>
        <div className="flex justify-center mt-6 mb-20">
          <img src="/Logo_INDO_FULL.png" className="mr-3 h-10 sm:h-14" alt="Flowbite React Logo" />
        </div>

        <div className="flex justify-center">
          <UserCard user="Alimentateur" path="/alimentateur" text="Espace pour re-approvisionner les rack de lignes de production." />     
          <UserCard user="Producteur" path="/producteur" text="Espace dedier au producteur afin de faire des alertes pour le réapprovisionement ." />
        </div>
      </>
    );
    
}