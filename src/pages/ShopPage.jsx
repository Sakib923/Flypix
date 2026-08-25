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
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar';

export default function ShopPage() {
    // const { toggleSidebar } = useSidebar();

    return (
        <div className="bg-[#F8FAFC] px-[16px] md:px-[40px] lg:px-[40px]">
            <div className="mt-[24px] mb-[16px] flex items-center justify-between rounded-[8px] bg-[#0F172A] px-[20px] py-[8px] md:mb-[24px] md:px-[40px] md:py-[17px] lg:px-[72px] lg:py-[24px]">
                <div className="size-[46px] md:size-[94px] lg:size-[160px]">
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
            <div className="flex items-center justify-between">
                <div className="flex h-10 items-center overflow-hidden rounded-[2px] border border-[#E2E8F0] bg-white">
                    {/* Label */}
                    <div className="border-r border-[#E2E8F0] px-3 text-sm font-medium whitespace-nowrap text-[#475569]">
                        Sort by
                    </div>

                    {/* Count badge
                    <div className="mx-1 rounded-sm bg-[#0284C7] px-1.5 py-0.5 text-xs font-semibold text-white">
                        15
                    </div> */}

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
                <button
                    className="flex w-[127px] cursor-pointer items-center justify-between rounded-[4px] border border-[#E2E8F0] bg-white px-[12px] py-[8px]"
                    onClick={''}
                >
                    <p className="font-[14px] lg:font-[24px]">Filter by</p>
                    <FilterIcon />
                </button>
            </div>
            {/* <div>
                <SidebarProvider>
                    <Sidebar>
                        <SidebarHeader />
                        <SidebarContent>
                            <SidebarGroup />
                            <SidebarGroup />
                        </SidebarContent>
                        <SidebarFooter />
                    </Sidebar>
                    <main>
                        <SidebarTrigger />
                    </main>
                </SidebarProvider>
            </div> */}

            <div className='flex h-[500px]'>
                <aside>
                    <SidebarProvider>
                    <Sidebar>
                        <SidebarHeader />
                        <SidebarContent>
                            <SidebarGroup />
                            <SidebarGroup />
                        </SidebarContent>
                        <SidebarFooter />
                    </Sidebar>
                    <main>
                        <SidebarTrigger />
                    </main>
                </SidebarProvider>
                </aside>
                <div className='flex-1'></div>

            </div>
        </div>
    );
}
