import { cn } from '@/lib/utils';

export default function ContactInfoItem({
    icon: Icon,
    label,
    value,
    className,
}) {
    return (
        <div className={cn('flex items-center gap-7', className)}>
            <div className="flex size-[88px] shrink-0 items-center justify-center rounded-full bg-[#A8FF35] text-[#0F172A]">
                <Icon size={32} weight="fill" />
            </div>

            <div className="flex flex-col gap-1">
                <span className="text-[22px] font-normal text-[#475569]">
                    {label}
                </span>
                <span className="text-[24px] font-semibold text-[#0F172A]">
                    {value}
                </span>
            </div>
        </div>
    );
}