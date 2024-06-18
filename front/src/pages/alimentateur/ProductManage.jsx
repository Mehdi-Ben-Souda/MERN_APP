import { MyNavbar } from "../../components/MyNavbar";
import { ProductTable } from "../../components/ProductTable";


export function ProductManage() {
    return (
      <>
        <MyNavbar />
        <div className='flex justify-end space-x-4'>
          <p className=' text-white text-2xl  font-consolas p-2 mb-5 mr-8 rounded-l-lg  bg-green-700' >Managment produit </p>
        </div>
        <div className="bg-green-500 p-5">
          <ProductTable />
        </div>
        

      </>
    );
}