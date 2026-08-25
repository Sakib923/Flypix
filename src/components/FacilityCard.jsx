import TickMark from '../assets/tickmark.svg?react';
export default function FacilityCard({
    facility,
    children,
    feature1,
    feature2,
}) {
    return (
        <div className="space-y-[12px] lg:p-[20px] border border-[#CBD5E1] rounded-[16px] p-[12px] min-w-[153px] ">
            <div className="flex items-center justify-between">
                <h3 className="text-[14px] lg:text-[24px] font-medium text-[#0F172A]">
                    {facility}
                </h3>
                <div className="size-[32px] lg:size-[60px] p-[6px] lg:p-[12px] rounded-full bg-[#64748B]">{children}</div>
            </div>
            <div className="space-y-2">
                <div className="flex space-x-2">
                    <TickMark />
                    <h5 className="text-[16px] font-normal text-[#475569]">
                        {feature1}
                    </h5>
                </div>
                <div className="flex space-x-2">
                    <TickMark />
                    <h5 className="text-[16px] font-normal text-[#475569]">
                        {feature2}
                    </h5>
                </div>
            </div>
        </div>
    );
}
