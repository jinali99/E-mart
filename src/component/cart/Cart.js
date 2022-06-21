import { useSelector } from "react-redux";

const Cart = () => {
  //   const [item, setItem] = useState();
  const list = useSelector((state) => state.itemReducer.items);
  // console.log("cart" , list);
  let ItemList = list.map((item, index) => {
    return (
      <>
      <div className="col-md-6">
      <img
        src={item.image}
        alt={item.title}
        height="400px"
        width="400px"
      />
    </div>
    <div className="col-md-7">
      <h4 className="text-uppercase text-black-50"> {item.category}</h4>
      <h1 className="display-5"> {item.title}</h1>
      <h3 className="display-6 fw-bold my-4"> $ {item.price}</h3>    
    </div>
  </>
     
    );
  });
  return <div>{ItemList}</div>;
};

export default Cart;
