// import { useState } from "react";
import styles from "../app/contact/contact.module.css"

const Contactform = () => {

    // const[user, setUser]= useState(initSate:{
    //     username:"",
    //     email:"",
    //     phone:"",
    //     message:"",






    // })
    // function handleChange(e){
        

    // }


    // function handleSubmit(){


    // }

    return (
        <>

          <form className={styles.contact_form}>
            <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
            Enter your name
            <input type="text" name="username" id="username"
            
            placeholder="enter your name"
            // value={user.username}
            // onChange={handleChange}
            
            />

        </label>

            </div>


              <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
            Enter your email
            <input type="text" name="email" id="email"
            
            placeholder="enter your email"
            
            />

        </label>

            </div>
            
              <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
            Enter your phone
            <input type="text" name="phone" id="phone"
            
            placeholder="enter your phone"
            
            />

        </label>

            </div>
              <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
            Enter your text
            <textarea name="message" id="message" rows={5}
            
            placeholder="enter your message"
            
            />

        </label>

            </div>

            <div>

                <button type="submit">Send message</button>
            </div>
            
            
            </form>  
        </>
    );
};

export default Contactform;