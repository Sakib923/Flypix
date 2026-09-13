import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function FormField({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    multiline = false,
    rows = 4,
    className,
    required = true,
}) {
    const fieldClassName =
        'w-full h-[36px] sm:h-[38px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[48px] rounded-[4px] border-[#D9E2EC] bg-[#F8FAFC] px-[14px] py-[12px] text-[14px] text-[#0F172A] placeholder:text-[#64748B]';

    return (
        <div className={cn('space-y-2', className)}>
            <label
                htmlFor={name}
                className="block  font-medium text-[#1E293B]   text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px]"
            >
                {label}
            </label>

            {multiline ? (
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={cn(fieldClassName, 'min-h-22.5 resize-none')}
                />
            ) : (
                <Input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={fieldClassName}
                />
            )}
        </div>
    );
}
