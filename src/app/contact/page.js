import ContactCard from "@/components/ContactCard";
import styles from "../contact/contact.module.css"
import Contactform from "@/components/Contactform";
const page = () => {
    return (
        <>
        <div className={styles.container}>


        

           <h1>Contact us</h1>
           <ContactCard/>
        <section className={styles.contact_section}>

        <h2>We love to hear <span>From you</span></h2>
       
       <Contactform/>
       
       
       
       
        </section>


           </div>
           </>

    );
};

export default page;