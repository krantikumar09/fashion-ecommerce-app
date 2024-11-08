import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import NewArrivalItem from "./NewArrivalItem";

const NewArrival = () => {
    const { offerProducts } = useContext(ShopContext);
    const [newArrivalProduct, setNewArrivalProduct] = useState([]);

    useEffect(() => {
        const arrivalProduct = offerProducts.filter((item) => item.newarrival)
        setNewArrivalProduct(arrivalProduct)
    },[])
  return (
    <div className="New-Arrival  mt-32 mb-20" id="newArrival">
        <Title title={"New Arrival"}/>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5 mt-16">
            {
                newArrivalProduct.map((item, index) => (
                    <NewArrivalItem key={index} id={item._id} image={item.image} name={item.name} text={item.description} categoryName={item.categoryName}/>
                ))
            }
        </div>
    </div>
  )
}

export default NewArrival