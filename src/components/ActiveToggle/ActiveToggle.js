import "./ActiveToggle.css";
import { useState } from "react";





function ActiveToggle() {

  const [isActive, setActive] = useState(false);


const handleToggle = () => {
  setActive(!isActive);
};


  return (

    
    <main>
      <div className={isActive === false ? "box" : "box box--active"} />
      <button type="button" onClick={handleToggle}>{isActive ===  false ? "Activate" : "Deactivate"}</button>
    </main>
  );
}





export default ActiveToggle;
