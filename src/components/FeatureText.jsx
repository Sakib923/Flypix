import TickMark from '../assets/tickmark.svg?react';

export default function FeatureText({ feature }) {
    return (
        <div className="flex items-start gap-2 lg:gap-3">
            <TickMark className="mt-0.5 sm:mt-0.5 md:mt-0.5 lg:mt-0 xl:mt-1.5 2xl:mt-1.5 size-3 shrink-0 sm:size-3 md:size-3.5 lg:size-5 xl:size-5 2xl:size-5 " />
            <span className="text-xs leading-[1.3] sm:text-xs md:text-sm lg:text-base xl:text-[24px] 2xl:text-[24px]">
                {feature}
            </span>
        </div>
    );
}
