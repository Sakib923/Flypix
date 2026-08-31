import { Slider } from './ui/slider';

export default function PriceRangeFilter({ maxPrice = 3000, price, setPrice }) {
    return (
        <div className="space-y-4 rounded-[8px] border border-[#E2E8F0] p-4">
            <h3 className="font-medium text-[#334155]">Price Range</h3>

            <div className="flex w-full gap-2">
                <input
                    className="box-border w-0 min-w-0 flex-1 rounded-lg border border-[#CBD5E1] px-3 py-2 placeholder:text-[14px] placeholder:text-[#64748B]"
                    type="number"
                    value={price[0]}
                    placeholder="From"
                    id="from"
                    onChange={(event) =>
                        setPrice((currentValue) => [
                            Number(event.target.value),
                            currentValue[1],
                        ])
                    }
                />

                <input
                    className="box-border w-0 min-w-0 flex-1 rounded-lg border border-[#CBD5E1] px-3 py-2 placeholder:text-[14px] placeholder:text-[#64748B]"
                    type="number"
                    value={price[1]}
                    placeholder="To"
                    id="to"
                    onChange={(event) =>
                        setPrice((currentValue) => [
                            currentValue[0],
                            Number(event.target.value),
                        ])
                    }
                />
            </div>

            <Slider
                id="slider-price"
                value={price}
                defaultValue={[0, maxPrice]}
                onValueChange={setPrice}
                min={0}
                max={maxPrice}
                step={10}
            />
        </div>
    );
}
