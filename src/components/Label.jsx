import { cn } from '@/lib/utils'; // Adjust this import path based on where your 'cn' helper is located

export default function Label({ children, label, className, labelClassName }) {
    return (
        <div className={cn('flex w-fit items-center space-x-2', className)}>
            {children && (
                <div className="flex size-[26px] items-center">{children}</div>
            )}
            <h2
                className={cn(
                    'text-[12px] font-medium text-[#476B16] md:text-[18px]',
                    labelClassName
                )}
            >
                {label}
            </h2>
        </div>
    );
}
