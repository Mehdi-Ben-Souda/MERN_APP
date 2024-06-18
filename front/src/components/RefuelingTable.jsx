
"use client";

import { Table,Button} from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

export function RefuelingTable(params) {
    const [notifications,setNotifications]=useState([]);


    useEffect(() => {
        fetch(`${API_URL}/refill`)
        .then((response) => response.json())
        .then((data) => setNotifications(data))
        .catch((error) => console.error(error));
    }, []);

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head >
          <Table.HeadCell>Rack à approvisionner</Table.HeadCell>
          <Table.HeadCell>Nom produit</Table.HeadCell>
          <Table.HeadCell>Code à barre</Table.HeadCell>
          <Table.HeadCell>Nombre de carton</Table.HeadCell>
          <Table.HeadCell>
            
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {
                notifications.map((notification) => (
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {notification.rack}
                        </Table.Cell>
                        <Table.Cell>{notification.product}</Table.Cell>
                        <Table.Cell>{notification.barrcode}</Table.Cell>
                        <Table.Cell>{notification.quantity}</Table.Cell>
                        <Table.Cell>
                        <Link to={params.path}>
                            <Button color="success" >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                                </svg>
                            </Button>
                        </Link>
                        <Link to={params.path}>
                            <Button color="failure" >
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                </svg>
                            </Button>
                        </Link>
                        </Table.Cell>
                    </Table.Row>    
                ))
            }
          
        </Table.Body>
      </Table>
    </div>
  );
}
