import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

// export function Icon() {
//   const [colorChange, setColorchange] = useState(false);

//   return (
//     <BsFillHeartFill
//       style={
//         colorChange === false
//           ? { color: "blue", fontSize: "50px" }
//           : { color: "red", fontSize: "50px" }
//       }
//       onClick={() => {
//         setColorchange(!colorChange);
//         console.log("clicked");
//       }}
//     />
//   );
// }

function Icon() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };
}
