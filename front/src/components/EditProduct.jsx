
"use client";

import { Button, FileInput, Label, Modal, Select, TextInput } from "flowbite-react";
import { useState } from "react";

export function EditProduct(params) {

  return (
    <>

      <Modal
        
        position="center"
      >
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>
          <div className="mb-2 block">
            <Label htmlFor="input-gray" color="gray" value="Nom produit"/>
          </div>
          <TextInput id="input-gray" placeholder="Input Gray" value={params.name} required color="gray" />

          <div className="mb-2 block">
            <Label htmlFor="input-gray" color="gray" value="Fournisseur"/>
          </div>
          <TextInput id="input-gray" placeholder="Input Gray" value={params.supplier} required color="gray" />

          <div className="mb-2 block">
            <Label htmlFor="input-gray" color="gray" value="Code à barre"/>
          </div>
          <TextInput id="input-gray" placeholder="Input Gray" value={params.barreCode} required color="gray" />
          
        </Modal.Body>
        <Modal.Footer>
          <Button >Modifier</Button>
          <Button color="gray" >
            Annuler
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
