import { TableCell, TableRow } from '@/components/ui/table';
import Delete from '../assets/delete.svg?react';
import MinusSign from '../assets/minus-sign.svg?react';
import PlusSign from '../assets/plus-sign.svg?react';
import { Checkbox } from '@/components/ui/checkbox';

export default function CartItemCard({
    image,
    name,
    price,
    property,
    quantity = 5,
    checked = false,
    onCheckedChange,
}) {
    return (
        <>
            <TableRow className="relative hidden w-full align-middle md:table-row">
                <TableCell className="w-[8%] px-5 py-6">
                    <Checkbox
                        checked={checked}
                        onCheckedChange={onCheckedChange}
                        className="stroke-[1.5]"
                        aria-label={`Select ${name}`}
                    />
                </TableCell>

                <TableCell className="w-[52%] px-5 py-6">
                    <div className="flex items-center space-x-[20px]">
                        <div className="flex items-center space-x-[12px]">
                            <img
                                src={image}
                                alt={name}
                                className="aspect-square size-[120px] rounded-[4px] object-cover"
                            />
                            <div className="flex flex-col justify-center space-y-1">
                                <h5 className="text-[20px] font-normal text-[#1E293B]">
                                    {name}
                                </h5>
                                <h4 className="text-[18px] font-medium text-[#475569]">
                                    ${price}
                                </h4>
                                <h6 className="text-[16px] font-normal text-[#475569]">
                                    Color: {property}
                                </h6>
                            </div>
                        </div>
                    </div>
                </TableCell>

                <TableCell className="w-[22%] px-5 py-6">
                    <div className="flex w-fit items-center justify-between gap-4 rounded-[8px] border border-[#CBD5E1] px-[16px] py-[12px]">
                        <button type="button" aria-label="Decrease quantity">
                            <MinusSign />
                        </button>
                        <span>{quantity}</span>
                        <button type="button" aria-label="Increase quantity">
                            <PlusSign />
                        </button>
                    </div>
                </TableCell>

                <TableCell className="w-[18%] px-5 py-6 text-right text-[18px] font-medium text-[#1E293B]">
                    ${Number(quantity) * Number(price)}
                </TableCell>

                <TableCell className="w-[8%] px-5 py-6 text-right">
                    <button
                        type="button"
                        aria-label="Remove item"
                        className="rounded-full bg-[#F1F5F9] p-1.5"
                    >
                        <Delete />
                    </button>
                </TableCell>
            </TableRow>

            {/* mobile version */}
            <div className="flex w-full items-center gap-3 overflow-hidden rounded-[8px] bg-white p-3 md:hidden">
                <Checkbox
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                    className="shrink-0 stroke-[1.5]"
                    aria-label={`Select ${name}`}
                />

                <div className="min-w-0 flex-1">
                    <div className="flex w-full min-w-0 items-center justify-between gap-2 border-b border-[#E2E8F0] pb-2">
                        <div className="flex min-w-0 items-center gap-3">
                            <img
                                src={image}
                                alt={name}
                                className="aspect-square size-[32px] shrink-0 rounded-[4px] object-cover"
                            />
                            <div className="min-w-0 flex-col justify-center space-y-1">
                                <h5 className="truncate text-[14px] font-normal text-[#1E293B]">
                                    {name}
                                </h5>
                                <h6 className="text-[12px] font-normal text-[#475569]">
                                    Color: {property}
                                </h6>
                            </div>
                        </div>

                        <button
                            type="button"
                            aria-label="Remove item"
                            className="shrink-0 rounded-full bg-[#F1F5F9] p-1.5"
                        >
                            <Delete />
                        </button>
                    </div>

                    <div className="flex w-full items-center justify-between gap-3 pt-3">
                        <div className="min-w-0">
                            <div className="flex w-fit items-center justify-between gap-4 rounded-[8px] border border-[#CBD5E1] px-[16px] py-[12px]">
                                <button
                                    type="button"
                                    aria-label="Decrease quantity"
                                >
                                    <MinusSign />
                                </button>
                                <span>{quantity}</span>
                                <button
                                    type="button"
                                    aria-label="Increase quantity"
                                >
                                    <PlusSign />
                                </button>
                            </div>
                        </div>

                        <div className="shrink-0 text-[12px] font-medium text-[#475569]">
                            {price} × {quantity}
                        </div>

                        <div className="shrink-0 text-[16px] font-medium text-[#1E293B]">
                            ${Number(quantity) * Number(price)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
