"use client";

import { Button, Table, Label, TextInput, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

export function BoxTabel() {
    const [boxes, setBoxes] = useState({});
    const [store, setStore] = useState([]);
    const [products, setProducts] = useState({});     

    const [currentData, setCurrentData] = useState(null);
    const [openModal, setOpenModal] = useState(false);

  function onModify(item) {
    setCurrentData(item);
    setOpenModal(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!currentData || !currentData._id) {
      console.error("Invalid data or missing id");
      return;
    }
  

    try {
      const response = await fetch(`http://localhost:8099/store/${currentData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const updatedData = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item._id === updatedData._id ? updatedData : item))
      );
      setOpenModal(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {

    const fetchData = async (myurl) => {
      try {
        const response = await fetch(myurl);
        const result = await response.json();
        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    let res=fetchData("http://localhost:8099/rawMaterials");
    setProducts(res);

    res=fetchData("http://localhost:8099/store");
    setStore(res);

    res=fetchData("http://localhost:8099/boxes");
    setBoxes(res);

  }, []);


  const fetchProduct = async (id)=>{
    if( products[id]) return products[id];

    const response = await fetch(`http://localhost:8099/rawMaterials/${id}`);
    const result = await response.json();
    setProducts(prevProducts => ({ ...prevProducts, [id]: result }));

    return result;
  }

    const fetchBox = async (id)=>{
    if( boxes[id]) return boxes[id];

    const response = await fetch(`http://localhost:8099/boxes/${id}`);
    const result = await response.json();
    setBoxes(prevBoxes => ({ ...prevBoxes, [id]: result }));
    return result;
    }

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Produit</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSave}>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Quantité" />
              <TextInput
                id="input-gray"
                name="quantity"
                value={currentData ? currentData.quantity : ""}
                onChange={handleChange}
                required
                color="gray"
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Fournisseur" />
              <TextInput
                id="input-gray"
                name="supplier"
                value={currentData ? currentData.supplier : ""}
                onChange={handleChange}
                required
                color="gray"
              />
            </div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Code à barre" />
              <TextInput
                id="input-gray"
                name="barreCode"
                value={currentData ? currentData.barreCode : ""}
                onChange={handleChange}
                required
                color="gray"
              />
            </div>
            <div className="flex justify-end">
              <Button color="success" type="submit">
                Modifier
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)} className="ml-2">
                Annuler
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <div className="overflow-x-auto mt-6">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Capacité Box</Table.HeadCell>
            <Table.HeadCell>Nom produit</Table.HeadCell>
            <Table.HeadCell>Code barre</Table.HeadCell>
            <Table.HeadCell>Quantité stock magasin</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Modifier</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Supprimer</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {store.map((item, index) => (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {fetchBox(item.box).capacity}
                </Table.Cell>
                <Table.Cell>{fetchProduct(fetchBox(item.box).rawMaterial).name}</Table.Cell>
                <Table.Cell>{fetchProduct(fetchBox(item.box).rawMaterial).barreCode}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => onModify(item)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </button>
                </Table.Cell>
                <Table.Cell>
                  <button className="font-medium text-red-600 hover:underline dark:text-red-500">
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
