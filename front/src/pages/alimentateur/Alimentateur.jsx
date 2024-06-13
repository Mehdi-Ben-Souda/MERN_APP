import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { FunctionalitiesCard } from '../../components/FunctionalitiesCard';
import { RefuelingTable } from '../../components/RefuelingTable';

const Alimentateur = () => {
  return (
    <>
      <MyNavbar/>
      <p className='text-center text-emerald-400 text-2xl font-consolas mb-5' >Espace Alimentateur </p>
      <div className='flex justify-center w-auto'>
        <div className='pr-8'>
          <FunctionalitiesCard functTitle="Gerer les produits" functDesc="Ajouter, modifier ou supprimer un produit" path="/alimentateur/gerer-produits" />
          <FunctionalitiesCard functTitle="Gerer le magasin" functDesc="Enregistrer une entrée de stock" path="/alimentateur/gerer-store" />
        </div>
      
        <RefuelingTable />
      </div>
      <div>

      </div>
      
    </>
  );
};

export default Alimentateur;
