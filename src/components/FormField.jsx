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
        'w-full rounded-[4px] border-[#D9E2EC] bg-[#F8FAFC] px-[14px] py-[12px] text-[14px] text-[#0F172A] placeholder:text-[#64748B]';

    return (
        <div className={cn('space-y-2', className)}>
            <label
                htmlFor={name}
                className="block text-[12px] font-medium text-[#1E293B]"
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
                    className={cn(
                        fieldClassName,
                        'min-h-22.5 resize-none'
                    )}
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