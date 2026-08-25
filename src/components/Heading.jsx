import { cn } from "@/lib/utils";

export default function Heading({ children, className = "" }) {
    return (
        <h1
            className={cn(
                "h-fit w-full text-balance text-[18px] font-medium text-[#0F172A] sm:text-[18px] md:text-[24px] lg:text-[36px] xl:text-[48px]",
                className
            )}
        >
            {children}
        </h1>
    );
}