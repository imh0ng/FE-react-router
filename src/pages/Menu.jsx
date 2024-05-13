import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {

  const navigate = useNavigate();
  const [brandInput, commitClick] = useState('');

  const getInput = e => {
    commitClick(e.target.value);
  };

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      navigate(`/product/${brandInput}`);
    }
  }

  return (
    <>
      <h1>Menu Page</h1>
      <div>
        <input type="text" value={brandInput} onChange={getInput} onKeyDown={(e) => activeEnter(e)}></input><button onClick={() => navigate(`/product/${brandInput}`)}>브랜드 페이지로 이동</button>
      </div>
    </>
  );
}

export default Menu;