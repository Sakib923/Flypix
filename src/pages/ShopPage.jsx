import DroneImage from '../assets/images/shopPageDron.png';
import DroneBoxImage from '../assets/images/droneBox.png';
import FilterIcon from '../assets/Preferences.svg?react';
import Heading from '@/components/Heading';
import Label from '@/components/Label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarGroup,
//     SidebarHeader,
//     SidebarProvider,
//     SidebarTrigger,
//     useSidebar,
// } from '@/components/ui/sidebar';
import ProductCard from '@/components/ProductCard';
import PriceRangeFilter from '@/components/PriceRangeFilter';
import FilterSection from '@/components/FilterSection';
import { useState } from 'react';

export default function ShopPage() {
    // const { toggleSidebar } = useSidebar();

    const [showFilters, setShowFilters] = useState(true);
    const [maxPrice, setMaxPrice] = useState(5000);
    const [price, setPrice] = useState([0, maxPrice]);

    const brands = [
        'DJI',
        'Autel Robotics',
        'Parrot',
        'Skydio',
        'Holy Stone',
        'Potensic',
        'Ryze Tech',
        'Hubsan',
        'Yuneec',
        'Eachine',
        'BetaFPV',
        'Walkera',
        '3D Robotics',
        'PowerVision',
        'Snaptain',
    ];

    return (
        <div className="bg-[#F8FAFC] px-4 py-8 sm:px-4 md:px-10 lg:px-14 xl:px-20 2xl:px-20">
            {/* Banner */}
            <div className="mt-6 mb-4 flex items-center justify-between rounded-[8px] bg-[#0F172A] px-5 py-2 md:mb-6 md:px-10 md:py-4.25 lg:px-18 lg:py-6">
                <div className="size-11.5 md:size-23.5 lg:size-40">
                    <img src={DroneImage} alt="" />
                </div>
                <div className="space-y-[4px] text-left lg:space-y-[12px]">
                    <Heading className="text-[14px] text-white md:text-[24px] lg:text-[40px]">
                        Fly without Compromise
                    </Heading>
                    <Label
                        label="LIMITED OFFER , ENJOY UPTO 30% ON  FIRST ORDER"
                        labelClassName="text-[8px] md:text-[12px] lg:text-[16px] text-[#A8FF35] "
                    />
                </div>
                <div className="h-[51px] w-[79px] md:h-[106px] md:w-[165px] lg:h-[180px] lg:w-[280.556px]">
                    <img src={DroneBoxImage} alt="" />
                </div>
            </div>

            {/* Products Title and No of Products */}
            <div>
                <h1 className="text-[20px] font-medium">Products</h1>
                <p className="text-sm text-gray-500">124 products</p>
            </div>

            {/* Product & Filter Section */}
            <div className="">
                {/* Filter Buttons */}
                <div className="mb-6 flex items-center justify-between">
                    {/* Sort Button */}
                    <div className="flex h-10 items-center overflow-hidden rounded-[2px] border border-[#E2E8F0] bg-white">
                        <div className="border-r border-[#E2E8F0] px-3 text-sm font-medium whitespace-nowrap text-[#475569]">
                            Sort by
                        </div>

                        {/* Select */}
                        <Select defaultValue="price-high">
                            <SelectTrigger className="h-full w-[210px] gap-2 rounded-none border-0 text-sm font-medium text-[#475569] shadow-none focus:ring-0">
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="price-high">
                                    Price High to Low
                                </SelectItem>

                                <SelectItem value="price-low">
                                    Price Low to High
                                </SelectItem>

                                <SelectItem value="newest">Newest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Filter button */}
                    <button
                        className="flex max-w-[140px] min-w-[127px] cursor-pointer items-center justify-between gap-x-2 rounded-[4px] border border-[#E2E8F0] bg-white px-[12px] py-[8px]"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <p className="font-[14px] lg:font-[24px]">
                            {' '}
                            {showFilters ? 'Hide Filters' : 'Filter by'}{' '}
                        </p>
                        <FilterIcon />
                    </button>
                </div>

                {/* Products Container */}
                <div className="overflow-hidden rounded-xl">
                    <div
                        className={`flex flex-wrap ${
                            showFilters
                                ? 'gap-x-4 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 xl:gap-x-[38px]'
                                : 'gap-0'
                        }`}
                    >
                        {/* Filter Sidebar */}
                        <aside
                            className={`shrink-0 overflow-hidden rounded-[12px] bg-white transition-all duration-300 ${
                                showFilters ? 'w-64' : 'w-0'
                            }`}
                        >
                            <div
                                className={`w-64 px-4 py-3 sm:p-4 ${
                                    showFilters ? 'opacity-100' : 'opacity-0'
                                } transition-all duration-300`}
                            >
                                <h2 className="mb-4 text-lg font-medium text-[#0F172A]">
                                    Filter Products
                                </h2>

                                <div className="flex flex-col gap-3">
                                    {/* Price */}

                                    <PriceRangeFilter
                                        maxPrice={maxPrice}
                                        price={price}
                                        setPrice={setPrice}
                                    />
                                    <FilterSection
                                        title={'Brands'}
                                        options={brands}
                                    />
                                    <FilterSection
                                        title={'Fly Time'}
                                        options={[
                                            '0-20 Min',
                                            '21-30 minutes',
                                            '31-50 minutes',
                                            '1 hour or above',
                                        ]}
                                    />
                                    <FilterSection
                                        title={'Camera Quality'}
                                        options={[
                                            'VGA',
                                            'HD 720p',
                                            'UHD 1024p',
                                            '4k 2100p',
                                        ]}
                                    />
                                </div>
                            </div>
                        </aside>

                        {/* Products */}
                        <main className="min-w-0 flex-1">
                            {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
                                        {Array.from({ length: 60 }).map((_, index) => (
                                            <ProductCard key={index} />
                                        ))}
                                    </div> */}

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {Array.from({ length: 60 }).map((_, index) => (
                                    <ProductCard key={index} />
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
