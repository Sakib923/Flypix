export default function Banner() {
    return (
        <div className=" flex flex-col md:flex-row  px-9.25  py-10.5 mx-0 sm:mx-0 md:mx-[24px] lg:mx-[30px] mt-7.5 h-fit  bg-black rounded-0 md:rounded-3xl items-center justify-between gap-y-[32px] md:gap-[35px] lg:gap-auto">
            <div className=" text-white text-center">
                <h2 className="text-[#77B526] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[26px] font-medium">FLY BEYOND LIMITS</h2>
                <h1 className="text-[28px] sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[58px] text-pretty font-medium mb-6">See the World from a New Height</h1>
                <p className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[20px] xl:text-[26px] ">Experience precision and performance with our top-tier drones designed for enthusiasts and professionals alike.</p>

            </div>
            <img src= "src/assets/images/Drone.png" className="w-[359px] sm:w-[359px] md:w-[358.826px] lg:w-[500px] xl:w-[630px] h-auto aspect-auto object-contain" alt={'Drone Image'}/>
        </div>
    )
}