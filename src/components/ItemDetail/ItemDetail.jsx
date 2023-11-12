import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ( {description, price, stock, name, img} ) => {

  const onAdd = (items) => { 
    alert(`Se agregaron ${items} al carrito`)
 }

  return (
    <div className="border m-2">
        <div className="card">
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title text-center fs-3 fw-bolder p-3">{name}</h5>
          <img src={img} alt="" width={500}/>
          <p className="card-text fs-4 text-wrap p-3"> {description} </p>
          <p className="fs-5 fw-bolder p-3">Precio: $ {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
}
