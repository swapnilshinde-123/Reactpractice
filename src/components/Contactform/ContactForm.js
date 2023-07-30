import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from "react-icons/md";
import{BsTelephoneFill} from "react-icons/bs";
import{MdEmail} from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
const[name, setName]= useState("swapnil");
const[email, setEmail]=useState("stshinde123@gmail.com");
const[text, setText]=useState("i have recently completed my post graduate diploma in advance computing");


const onSubmit =(event)=> {
  event.preventDefault();
  setName(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);
  
  console.log("name",event.target[0].value);
  console.log("email",event.target[1].value);
  console.log("text",event.target[2].value);
};


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button 
        text="VIA SUPPORT CHAT"
        icon={<MdMessage fontSize="24px"/>}/>
        <Button
       
        text="VIA Call"
        icon={<BsTelephoneFill fontSize="24px"/>}/>
        </div>
        <Button 
           isoutline={true}
        text="VIA Email Form"
        icon={<MdEmail fontSize="24px"/>}/>
        
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}> 
          <label htmlFor="name">Name</label>
          <input type="text" name="name"></input>
          </div>
          <div className={styles.form_control}> 
          <label htmlFor="email">Email</label>
          <input type="email" name="email"></input>
          </div>
          <div className={styles.form_control}> 
          <label htmlFor="text">text</label>
          <textarea name="text" rows="8"></textarea>
          </div>
          <div style={
            {
              display:"flex",
              justifyContent:"end",
            }
          }>

          <Button text="SUBMIT BUTTON"/>
          </div>

          <div> { name + " "+email + " " +text}</div>
        
          </form>
          </div>
        <div className={styles.contact_img}>
          <img src="cont.webp"alt="contact image"/>
        </div>
        
            
      
    </section>
  );
};

export default ContactForm;