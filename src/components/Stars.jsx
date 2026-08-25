import Star from '../assets/star.svg?react';

export default function Stars({ rattings }) {
    return (
        <div className="h-fit w-fit flex items-center space-x-0.5">
            {Array.from({ length: 5 }).map((_, index) => {
                const isFilled = rattings - 1 >= index;

                return (
                    <Star
                        className={` ${isFilled ? 'text-[#FF9900]' : 'stroke-gray-500 text-white'}`}
                    />
                );
            })}
        </div>
    );
}
