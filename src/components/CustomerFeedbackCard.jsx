import Star from "../assets/star.svg?react"

export default function CustomerFeedbackCard({
    rattings = 3,
    customerName,
    feedback,
    image = "https://avatar.imagik.app/_next/image?url=%2Fimages%2Favatar.webp&w=3840&q=75",
}) {
    return (
        <div className="space-y-[12px] rounded-[4px] bg-white px-[16px] py-[24px] min-w-[340px] ">
            <div className="flex space-x-[4px]">
                {Array.from({ length: 5 }).map((_, index) => {
                                        const isFilled = rattings - 1 >= index;
                
                                        return (
                                            <Star
                                                className={` ${isFilled ? 'text-[#FF9900]' : 'text-white  stroke-gray-500'}`}
                                            />
                                        );
                                    })}
            </div>
            <div className="text-[12px] font-normal text-[#475569] line-clamp-3">
                {feedback}
            </div>
            <div className="space-x-[8px] flex items-center">
                <div xlassName="size-[32px]">
                    <img
                        src={image}
                        alt=""
                        className="size-[32px] rounded-full"
                    />
                </div>
                <h1 className="text-[14px] font-medium text-[#0F172A]">
                    {customerName}
                </h1>
            </div>
        </div>
    );
}
