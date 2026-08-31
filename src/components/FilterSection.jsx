import { Checkbox } from './ui/checkbox';

export default function FilterSection({ title = 'Brands', options }) {
    return (
        <div className="h-fit w-full space-y-4 rounded-[8px] border border-[#E2E8F0] p-4">
            <h3 className="font-medium text-[#334155]">{title}</h3>

            <div className="space-y-2">
                {Array.isArray(options) &&
                    options.map((option) => (
                        <label className="flex items-center gap-2">
                            <Checkbox />
                            <span className="text-[16px]">{option}</span>
                        </label>
                    ))}
            </div>
        </div>
    );
}
