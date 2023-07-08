import React, { useState } from 'react';
import { useEffect } from 'react';

function App () {
  const [pacarSaya, setPacarSaya] = useState(0);
  const [mobils, setMobil] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (pacarSaya > 1) {
      setMobil("Wah you are super rich!");
    } else {
      setMobil("You have to work hard to make money");
    }
  }, [pacarSaya])

  const addCar = ()=> {
    setPacarSaya((tambahCewe) => tambahCewe + 1);
    setErrorMsg("");
  }

 return (
  <>
  <p>{errorMsg}</p>
  <p>Message: {mobils}</p>
  <p>How many cars do I have? : {pacarSaya}</p>
  <button onClick={addCar}>Add Car</button>
  <button onClick={ () => 
  { if (pacarSaya > 0 ) {
    setPacarSaya (( kurangCewe) => kurangCewe - 1);
    setErrorMsg("");
    }
    else {
      setErrorMsg("Atleast you have one car to play here!")
    }
  }}>Remove car</button>
</>
);
}

export default App;
