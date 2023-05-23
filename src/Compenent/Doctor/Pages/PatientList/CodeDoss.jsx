import React, { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import "./codemedd.css"
function generateCode() {
  const length = 6; // Longueur du code généré
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Caractères possibles pour le code
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}

function CodeDoss() {
  const [showCode, setShowCode] = useState(false);
  const code = generateCode();

  const handleToggleCode = () => {
    setShowCode(!showCode);
  };

  return (
    <>
    <div className="codemed">
      <h1>Code généré :</h1>
      <input
        type={showCode ? "text" : "password"}
        value={code}
        readOnly
      />
      <RemoveRedEyeIcon onClick={handleToggleCode}/>
        {/* {showCode ? "Masquer le code" : "Afficher le code"} */}
     
    </div>
    </>
  );
}

export default CodeDoss;
