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
}) {
    return (
        <div className="relative grid grid-cols-3 items-center">
            <div className="flex items-center space-x-[20px]">
                <Checkbox className="stroke-[1.5]" />
                <div className="flex space-x-[12px]">
                    <img
                        src={image}
                        alt=""
                        className="size-[120px] rounded-[4px]"
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
            <div className="flex h-fit max-w-37.5 justify-between rounded-[8px] border border-[#CBD5E1] px-[16px] py-[12px]">
                <button>
                    <MinusSign />
                </button>
                {quantity}
                <button>
                    <PlusSign />
                </button>
            </div>
            <div>${Number(quantity * price)}</div>
            <button className="absolute top-4 right-4 rounded-full bg-[#F1F5F9] p-1.5">
                <Delete />
            </button>
        </div>
    );
}
