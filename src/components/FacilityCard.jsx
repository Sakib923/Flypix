import TickMark from '../assets/tickmark.svg?react';
export default function FacilityCard({
    facility,
    children,
    feature1,
    feature2,
}) {
    return (
        <div className="min-w-[153px] space-y-[12px] rounded-[16px] border border-[#CBD5E1] p-[12px] sm:p-[14px] md:p-[16px] lg:p-[18px] lg:p-[20px] xl:p-[20px] 2xl:p-[20px]">
            <div className="flex items-center justify-between gap-[5px] sm:gap-[8px] md:gap-[11px] lg:gap-[15px] xl:gap-[20px] 2xl:gap-[20px]">
                <h3 className="text-[14px] font-medium text-[#0F172A] sm:text-[14px] md:text-[14px] lg:text-[19px] xl:text-[24px] 2xl:text-[24px]">
                    {facility}
                </h3>
                <div className="size-[32px] rounded-full bg-[#64748B] p-[6px] sm:size-[32px] sm:p-[6px] md:size-[42px] md:p-[6px] lg:size-[48px] lg:p-[10px] xl:size-[60px] xl:p-[14px] 2xl:size-[60px] 2xl:p-[14px]">
                    {children}
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex space-x-2">
                    <TickMark className="mt-0.5 size-3 shrink-0 sm:mt-0.5 sm:size-3 md:mt-0.5 md:size-3.5 lg:mt-0 lg:size-5 xl:mt-1.5 xl:size-5 2xl:mt-1.5 2xl:size-5" />
                    <h5 className="text-[16px] font-normal text-[#475569]">
                        {feature1}
                    </h5>
                </div>
                <div className="flex space-x-2">
                    <TickMark className="mt-0.5 size-3 shrink-0 sm:mt-0.5 sm:size-3 md:mt-0.5 md:size-3.5 lg:mt-0 lg:size-5 xl:mt-1.5 xl:size-5 2xl:mt-1.5 2xl:size-5" />
                    <h5 className="text-[16px] font-normal text-[#475569]">
                        {feature2}
                    </h5>
                </div>
            </div>
        </div>
    );
}
