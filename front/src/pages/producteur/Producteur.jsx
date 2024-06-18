import React, { useEffect, useRef, useState } from 'react';
import { MyNavbar } from '../../components/MyNavbar';
import { Button, Select, Label, TextInput , Alert} from "flowbite-react";
import { API_URL } from '../../config';

const Producteur = () => {
  const [racks,setRacks] = useState([]);
  const [products,setProducts] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const selectedProd = useRef(null);
  const selectedRack = useRef(null);
  const selectedQuantity = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      product: selectedProd.current.value,
      rack: selectedRack.current.value,
      quantity: selectedQuantity.current.value
    }

    fetch(`${API_URL}/refill`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        setSuccessAlert(true);
      } else {
        setErrorAlert(true);
      }
    })
    .catch(error => {
      console.error(error);
      setErrorAlert(true);
    });
  }




  useEffect(() => {
    fetch(`${API_URL}/rack`)
      .then(response => response.json())
      .then(data => setRacks(data))
      .catch(error => console.error(error));

    fetch(`${API_URL}/rawMaterials`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));

  }, []);


  return (
    <>
      <MyNavbar/>
      <div className='flex justify-end space-x-4'>
        <p className=' text-white text-2xl  font-consolas p-2 mb-5 mr-8 rounded-l-lg  bg-green-700' >Espace Producteur </p>
      </div>
      {successAlert && 
        <Alert color="success" onDismiss={() => setSuccessAlert(false)}>
            <span className="font-medium">Info !</span> changements effectué avec succé.
        </Alert>
      }

      {errorAlert && 
        <Alert color="failure" onDismiss={() => setErrorAlert(false)} >
            <span className="font-medium">Erreur !</span> veuillez réessayer.
        </Alert>
      }
      
      <div className='flex justify-center'>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div className="mb-2 block">
            <Label htmlFor="produit" value="Selectioner le produit" />
            <Select id="produit" required ref={selectedProd}>
              <option disabled selected value="">-- Select a product --</option>
              {
                products.map((product) => (
                  <option key={product._id}  value={product._id}>{product.name}</option>
                ))
              }
            </Select>
          </div>
          <div className="mb-2 block">
            <Label htmlFor="rack" value="Selectioner le rack" />
            <Select id="rack" required ref={selectedRack}>
              <option disabled selected value="">-- Select a rack --</option>
              {
                racks.map((rack) => (
                  <option key={rack._id}  value={rack._id}>{rack.address}</option>
                ))
              }
            </Select>
          </div>
          <div>
              <Label htmlFor="quantity" value="Nombre de Box desiré" />
              <TextInput id="quantity" type="number" min="1" ref={selectedQuantity}/>
          </div>
          <Button color="success" type="submit" onClick={handleSubmit} >Envoyer la demande</Button>

        </form>
      </div>


    </>
  );
};

export default Producteur;
