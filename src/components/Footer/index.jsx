import React from 'react';
import style from "../../Styles/Footer.module.scss";
import logo from "../../assets/Easy.svg";

export default function Footer() {
  return (
    <div className={style.footer}>
     <img src={logo} alt="" style = {{width:"120px"}}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolores est repellat numquam aperiam rem, dolorem officiis consequatur laboriosam possimus non earum, reiciendis delectus. Reiciendis rem esse nam corporis totam.</p>
    </div>
  )
}
