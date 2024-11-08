import Image from "next/image";

export default function Main() {
  return (
    <div className="flex mt-28 ml-24">
   
      <div className="text w-[450px] p-4">
        <h2 className="heading font-semibold text-4xl pt-4">IMPECCABLE</h2>
        <h2 className="heading font-semibold text-4xl pt-4">CRAFTSMANSHIP AND</h2>
        <h2 className="heading font-semibold text-4xl pt-4">FINESSE</h2>
        
        <div className="para font-medium text-[#A29875] w-[400px] pt-8 ">
          <p>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
        </div>
        
        
        <div className="btn mt-4">
          <a href="#">
            <button className="bg-[#A29875] w-40 text-white px-4 py-2 rounded-md">Explore Now</button>
          </a>
        </div>
      </div>
      
     
      <div className="img w-[300px] ml-96">
        <Image 
          src="/images/main.png" 
          alt="img" 
          width={300} 
          height={250} 
        />
      </div>
    </div>
  );
}
