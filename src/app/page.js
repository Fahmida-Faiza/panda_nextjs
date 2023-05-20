import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";


const page = () => {
  return (
    <>
     <Herosection  title={"Let's watch"} imageUrl={"/pic.jpg"}/>

     <Footer/>
    </>
  );
};

export default page;