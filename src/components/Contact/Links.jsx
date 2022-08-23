import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillBehanceSquare } from "react-icons/ai";

const Links = () => {
  return (
    <div>
      <ul>
        <li>
          <AiOutlineWhatsApp />
          <p>Whatsapp</p>
        </li>
        <li>
          <AiOutlineMail />
          <p>Correo</p>
        </li>
        <li>
          <AiFillBehanceSquare />
          <p>Behance</p>
        </li>
      </ul>
    </div>
  );
};

export default Links;
