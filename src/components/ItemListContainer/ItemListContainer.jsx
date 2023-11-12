import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);


  
  useEffect(() => {

    setIsLoading(true); 
    getProducts()
      .then((resp) => {

        if(category) {
         
        const productsFilter = resp.filter(product => product.category === category);
        
        setProducts(productsFilter);
        
        setIsLoading(false);
        
        } else {
          
          setProducts(resp);
        setIsLoading(false);
          
        }
 
      })
      .catch((error) => console.log(error));
  }, [category]); // En el array de dependencia controlamos si se modifica el valor de la category para recargar el componente


  return (
    <>
      <div className="text-center fs-3 p-3 text-primary-emphasis"> {greeting} </div>
      {/* si isLoading está en true va a mostrar Cargando productos... pero cuando se pase a false va a renderizar los productos */}
      { isLoading ? <h2>Buscando productos...</h2> : <ItemList products={products} /> }
    </>
  );
};
