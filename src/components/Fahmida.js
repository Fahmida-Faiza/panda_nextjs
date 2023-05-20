import Image from "next/image";
import styles from "../app/blog/faiza.module.css"

const Fahmida = () => {
    return (
        <div className={styles.row}>
         
            <h1>Blogs</h1>

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
              src={"/laptop2.jpg"}
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


<div className={styles.col}>


<div class="card">
   <Image
              src={"/people.jpg"}
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





            
       
       
</div>

















    );
};

export default Fahmida;