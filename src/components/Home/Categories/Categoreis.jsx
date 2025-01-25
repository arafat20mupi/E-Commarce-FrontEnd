import img1 from "../../../../public/images/style1.png"

const Categoreis = () => {
    return (
        <div className="container md:p-10 p-5  my-20 mx-auto lg:rounded-[40px] bg-[#F0F0F0]">
            <h3 className="lg:text-5xl md:text-4xl text-2xl  text-center uppercase font-bold ">
            BROWSE BY dress STYLE</h3>
            {/* img container */}
            <div className="grid mt-8 md:grid-cols-5 grid-cols-1 md:grid-rows-2 grid-rows-4 gap-10">
               <div className="bg-white w-full flex relative justify-end md:pr-10  rounded-[20px] md:col-span-2 h-[300px]">
                <h3 className="text-xl font-bold absolute lg:left-10 left-5 top-5 md:left-5  md:top-10">Casual</h3>
                <img className="h-full" src={img1} alt="" />
               </div>
               <div className="bg-white relative flex justify-end pr-10  rounded-[20px] md:col-span-3 h-[300px]">
               <h3 className="text-xl font-bold absolute lg:left-10 left-5 top-5 md:left-5  md:top-10">Casual</h3>
               <img className="h-full" src={img1} alt="" />

               </div>
               <div className="bg-white relative flex justify-end pr-10  rounded-[20px] md:col-span-3 h-[300px]">
               <h3 className="text-xl font-bold absolute lg:left-10 left-5 top-5 md:left-5  md:top-10">Casual</h3>
               <img className="h-full" src={img1} alt="" />

               </div>
              
               <div className="bg-white relative flex justify-end pr-10 rounded-[20px] md:col-span-2 h-[300px]">
               <h3 className="text-xl font-bold absolute lg:left-10 left-5 top-5 md:left-5  md:top-10">Casual</h3>
                <img className="h-full" src={img1} alt="" />
               </div>
            </div>
          
        </div>
    );
};

export default Categoreis;