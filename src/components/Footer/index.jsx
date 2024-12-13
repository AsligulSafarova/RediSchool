import React from 'react';
import style from "../../Styles/Footer.module.scss";
import logo from "../../assets/Easy.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className={style.footer}>
     <img src={logo} alt="" style = {{width:"120px"}}/>
         <div style = {{marginLeft:"2rem"}}> 
          <p style = {{fontSize:"1.7rem", marginBottom:"1rem"}}>© Copyright 2025-2026 |  EasyCook </p>
          <h2>Created by Asligul Safarova && Houzan Kousa</h2>
         </div>
         <div  className={style.terms}>
          <ul >
            <li>Legal Notice </li>
            <li>Terms & Conditions  Privacy Policy</li>
            <li> Cookie Policy</li>
          </ul>
         </div>
         <div className={style.contact}>
          <h3>Contuct Us</h3>
          <p> <span><MdEmail />  </span>redischoolproject@gmail.com </p>
          <p>  <span><FaPhoneAlt /></span>+49785588777  </p>
         </div>
    </div>
  )}
