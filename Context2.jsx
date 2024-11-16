import { Usercontext } from "./Home"
import { useContext } from "react"
const Context2 = () => {
    const d =useContext(Usercontext);
  return (
    <div>
            // const bedsdata = data.filter(product => product.category === 'Single Bed');

      hi im{d.name} ilove you dodo 
    </div>
  )
}

export default Context2
