import { MyNavbar } from "../components/MyNavbar";
import { ProductTable } from "../components/ProductTable";


export function ProductManage() {
    return (
      <>
        <MyNavbar />
        <h1 className="text-center underline text-2xl" >Espace managment produit</h1>
        
        <ProductTable />

      </>
    );
}