export default function FeatureCard({label, heading}){
    return (
        <div className="h-full w-full px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-3 items-center text-center border-2 border-[#CBD5E1] rounded-[8px] space-y-[4px] lg:space-y-[8px]">
            <div className="text-xs sm:text-xs md:text-xs lg:text-base xl:text-base 2xl:text-base font-[400] text-[#475569]">
                {heading}
            </div>
            <div className="text-xs sm:text-sm md:text-sm lg:text-2xl xl:text-2xl 2xl:text-2xl font-[500] sm:font-[400]">
                {label}
            </div>

        </div>
    )
}