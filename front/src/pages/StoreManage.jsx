
"use client";
import { MyNavbar } from "../components/MyNavbar";
import { Button,Select ,Label, Modal, TextInput , Alert} from "flowbite-react";
import { useEffect, useRef, useState } from "react";

export function StoreManage() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const [products, setProducts] = useState([]);
  const [racks, setRacks] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [boxDetails, setBoxDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);


  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8099/rawMaterials");
      const data = await response.json();
      setProducts(data);
    };
    const fetchRacks = async () => {
      const response = await fetch("http://localhost:8099/rack");
      const data = await response.json();
      setRacks(data);
    };
    fetchRacks();
    fetchProducts();

  }, []);

  const handleSelectChange = async (event) => {
    const productId = event.target.value;
    setSelectedProduct(productId);

    // Fetch box details here
    const response = await fetch(`http://localhost:8099/boxes/rawMaterial/${productId}`);
    const box = await response.json();
    setBoxDetails(box);
  };

  const maxQuantity = async (productId) => {
    const response = await fetch(`http://localhost:8099/store/${productId}`);
    const box = await response.json();
    return box.quantity;
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form");
    const response = await fetch(`http://localhost:8099/store/add/${boxDetails._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    });

    if (response.ok) {
      console.log("Store added successfully");
      setSuccessAlert(true);
    }
    else {
      console.log("Error adding store");
      setErrorAlert(true);
    }
    setOpenModal(false);
  }

  const handleSubmitModal2 = async (event) => {
    event.preventDefault();
    console.log("Submitting form");
    const response = await fetch(`http://localhost:8099/store/remove/${boxDetails._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
        box_id: document.getElementById("rack").value
      }),
    });

    if (response.ok) {
      console.log("Store added successfully");
      setSuccessAlert(true);
    }
    else {
      console.log("Error adding store");
      setErrorAlert(true);
    }
    setOpenModal2(false);
  }


  return (
    <>
      <MyNavbar />
      <h1 className="text-center text-emerald-400 text-2xl font-consolas mb-5" >Espace managment store</h1>
      {successAlert && 
        <Alert color="success" onDismiss={() => setSuccessAlert(false)}>
            <span className="font-medium">Info !</span> changements effectué avec succé.
        </Alert>
      }

      {errorAlert && 
        <Alert color="failure" onDismiss={() => setErrorAlert(false)} icon={HiInformationCircle}>
            <span className="font-medium">Erreur !</span> veuillez réessayer.
        </Alert>
      }
      <div className="grid grid-rows-1 grid-flow-col gap-4 mt-4">
        <div>    
        </div>
        <div className="flex justify-between ">
        <Button gradientMonochrome="success" onClick={() => setOpenModal(true)}>Enregistrer entrée de produit</Button>
        <Button gradientMonochrome="teal" onClick={() => setOpenModal2(true)}>Enregistrer sortie de produit</Button>
      
        </div>
        <div></div>
        </div>
      
      <form onSubmit={handleSubmit}>  
        <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
          <Modal.Header />
          <Modal.Body>
            <div className="mb-2 block">
            <Label htmlFor="produit" value="Selectioner le produit" />
            <Select id="produit" required onChange={handleSelectChange}>
              <option disabled selected value="">-- Select a product --</option>
              {
                products.map((product) => (
                  <option key={product._id}  value={product._id}>{product.name}</option>
                ))
              }
            </Select>
            {boxDetails && (
              <div>
                <h2>Le Box de ce produit contient</h2>
                <p>Quantité: {boxDetails.quantity}</p>

              </div>
            )}
            </div>
            <div>
              <Label htmlFor="quantity" value="Nombre de Box en entrée dans le magasin" />
              <TextInput id="quantity" type="number" min="1" onChange={handleQuantityChange} />
            </div>
            
          </Modal.Body>

          <Modal.Footer>

            <Button onClick={() => setOpenModal(false)}>Fermer</Button>

            <Button color="primary" type="submit" onClick={handleSubmit} >Ajouter</Button>

          </Modal.Footer>

        </Modal>
      </form>
      
      <form onSubmit={handleSubmitModal2}>
        <Modal show={openModal2} size="md" popup onClose={() => setOpenModal2(false)}>
          <Modal.Header />
          <Modal.Body>
            <div className="mb-2 block">
            <Label htmlFor="produit" value="Selectioner le produit" />
            <Select id="produit" required onChange={handleSelectChange}>
              {
                products.map((product) => (
                  <option key={product._id}  value={product._id}>{product.name}</option>
                ))
              }
            </Select>
            {boxDetails && (
              <div>
                <h2>Le Box de ce produit contient</h2>
                <p>Quantité: {boxDetails.quantity}</p>

              </div>
            )}
            <Label htmlFor="rack" value="Selectioner le rack d'affectation" />
            <Select id="rack" required>
              <option disabled selected value="">-- Select a rack --</option>
              { 
                racks.map((rack) => (
                  <option key={rack._id}  value={rack._id}>{rack.address}</option>
                ))
              } 
            </Select>
            </div>
            <div>
              <Label htmlFor="quantity" value="Nombre de Box en sortie du magasin" />
              <TextInput id="quantity" type="number" min={selectedProduct?"1":"0"} max={selectedProduct?"10":"0"} onChange={handleQuantityChange} />
            </div>
            
          </Modal.Body>

          <Modal.Footer>

            <Button onClick={() => setOpenModal2(false)}>Fermer</Button>

            <Button color="primary" type="submit" onClick={handleSubmitModal2} >Ajouter</Button>

          </Modal.Footer>

        </Modal>
      </form>
      
      </>
  );
}
