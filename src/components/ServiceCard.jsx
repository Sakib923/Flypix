export default function ServiceCard({ label, children }) {
    return (
        <div className="flex w-full min-w-fit flex-col items-center justify-center space-y-2 rounded-[8px] border border-[#64748B] py-2 sm:w-full md:w-full md:max-w-full md:space-y-3 md:py-3 lg:py-5">
            <div className="size-[24px] lg:size-12">{children}</div>
            <div className="text-[12px] text-[#0F172A] md:text-[14px] lg:text-[16px] lg:font-normal">
                {label}
            </div>
        </div>
    );
}
