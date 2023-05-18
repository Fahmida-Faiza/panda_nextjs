import Image from "next/image";
import styles from "../app/blog/faiza.module.css"

const Fahmida = () => {
    return (
        <div className={styles.row}>
            <h1>Card</h1>

<div class="card">
   <Image
              src={"/pic.jpg"}
              alt="watching blogs"
              width={200}
              height={200}
            />
  <div class="container">
    <h4><b>Fahmida Faiza</b></h4> 
    <p>CSE Engineer</p> 
    
  </div>
</div>



<div class="card">
   <Image
              src={"/pic.jpg"}
              alt="watching blogs"
              width={200}
              height={200}
            />
  <div class="container">
    <h4><b>Fahmida Faiza</b></h4> 
    <p>CSE Engineer</p>
    
  </div>
</div>






<div class="card">
   <Image
              src={"/pic.jpg"}
              alt="watching blogs"
              width={200}
              height={200}
            />
  <div class="container">
    <h4><b>Fahmida Faiza</b></h4> 
    <p>CSE Engineer</p> 
  </div>
</div>
            
        </div>






    );
};

export default Fahmida;