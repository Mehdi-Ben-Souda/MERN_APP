import React from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { FunctionalitiesCard } from '../../components/FunctionalitiesCard';
import { RefuelingTable } from '../../components/RefuelingTable';

const Alimentateur = () => {
  return (
    <>
      <MyNavbar/>
      <div className='flex justify-end space-x-4'>
        <p className=' text-white text-2xl  font-consolas p-2 mb-5 mr-8 rounded-l-lg  bg-green-700' >Espace Alimentateur </p>
      </div>
      <div className='flex justify-center w-auto'>
        <div className='pr-8'>
          <FunctionalitiesCard functTitle="Gerer les produits" functDesc="Ajouter, modifier ou supprimer un produit" path="/alimentateur/gerer-produits" />
          <FunctionalitiesCard functTitle="Gerer le magasin" functDesc="Enregistrer une entrée de stock" path="/alimentateur/gerer-store" />
        </div>
        <div className='bg-green-500 rounded-t-lg p-2'>
          <h2 className='flex justify-center text-white text-xl mb-2 bt-2 font-semibold'> Alertes de ravitaillements</h2>
          <RefuelingTable />
        </div>
      
        
      </div>
      
      
    </>
  );
};

export default Alimentateur;
