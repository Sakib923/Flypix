export default function Banner() {
    return (
        <div className="sm:px-[0px] md:px-[24px] lg:px-[52px] xl:px-[80px] 2xl:px-[80px]">
            <div className="rounded-0 lg:gap-auto mt-7.5 flex h-fit flex-col items-center justify-between gap-y-[32px] bg-black px-9.25 py-10.5 md:flex-row md:gap-[35px] md:rounded-3xl lg:mx-[30px]">
                <div className="text-center text-white">
                    <h2 className="text-[12px] font-medium text-[#77B526] sm:text-[12px] md:text-[14px] lg:text-[20px] xl:text-[26px]">
                        FLY BEYOND LIMITS
                    </h2>
                    <h1 className="mb-6 text-[28px] font-medium text-pretty sm:text-[28px] md:text-[32px] lg:text-[42px] xl:text-[58px]">
                        See the World from a New Height
                    </h1>
                    <p className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[20px] xl:text-[26px]">
                        Experience precision and performance with our top-tier
                        drones designed for enthusiasts and professionals alike.
                    </p>
                </div>
                <img
                    src="src/assets/images/Drone.png"
                    className="aspect-auto h-auto w-[359px] object-contain sm:w-[359px] md:w-[358.826px] lg:w-[500px] xl:w-[630px]"
                    alt={'Drone Image'}
                />
            </div>
        </div>
    );
}
