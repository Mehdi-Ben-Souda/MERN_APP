
"use client";

import { Table,Button} from "flowbite-react";
import { Link } from "react-router-dom";

export function RefuelingTable(params) {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Rack à approvisionner</Table.HeadCell>
          <Table.HeadCell>Nom produit</Table.HeadCell>
          <Table.HeadCell>Code à barre</Table.HeadCell>
          <Table.HeadCell>Nombre de carton</Table.HeadCell>
          <Table.HeadCell>
            
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Rack A
            </Table.Cell>
            <Table.Cell>Disque section 10/2</Table.Cell>
            <Table.Cell>01234288293</Table.Cell>
            <Table.Cell>2</Table.Cell>
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Rack B
            </Table.Cell>
            <Table.Cell>verre section 2/2</Table.Cell>
            <Table.Cell>1939200492</Table.Cell>
            <Table.Cell>4</Table.Cell>
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Rack A</Table.Cell>
            <Table.Cell>Poulie polissage</Table.Cell>
            <Table.Cell>1390323</Table.Cell>
            <Table.Cell>2</Table.Cell>
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Rack D
            </Table.Cell>
            <Table.Cell>Poulie polissage </Table.Cell>
            <Table.Cell>028382839138</Table.Cell>
            <Table.Cell>2</Table.Cell>
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Rack E</Table.Cell>
            <Table.Cell>Verre section 4/5</Table.Cell>
            <Table.Cell>23929310372</Table.Cell>
            <Table.Cell>3</Table.Cell>
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
        </Table.Body>
      </Table>
    </div>
  );
}
