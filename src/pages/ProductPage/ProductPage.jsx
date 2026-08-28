import FacilityCard from '@/components/FacilityCard';
import Heading from '@/components/Heading';
import ServiceCard from '@/components/ServiceCard';
import Stars from '@/components/Stars';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import DeliveryIcon from '../../assets/delivery.svg?react';
import ReturnIcon from '../../assets/freeReturn.svg?react';
import WarrentyIcon from '../../assets/warrenty.svg?react';
import PaymentIcon from '../../assets/payment.svg?react';
import FeatureCard from '@/components/FeatureCard';
import FeatureText from '@/components/FeatureText';
import ProductDescription from './components/ProductDescription';

export default function ProductPage({ price }) {
    const [imageSelector, setImageSelector] = useState(0);
    const [activeSectoin, setActiveSection] = useState('description');

    return (
        <div className="space-x-12 bg-[#F8FAFC] px-[16px] pt-[24px] lg:px-[40px] xl:px-[80px]">
            {/* Product */}
            <div className="flex flex-col space-x-6 md:flex-row xl:space-x-12">
                {/* Image Gallery  */}
                <div className="flex-1 space-y-[12px]">
                    <img
                        src=""
                        alt=""
                        className="md:size-[350px] xl:size-[593px]"
                    />
                    <div className="flex space-x-2">
                        <img src="" alt="" className="size-14" />
                        <img src="" alt="" className="size-14" />
                        <img src="" alt="" className="size-14" />
                        <img src="" alt="" className="size-14" />
                        <img src="" alt="" className="size-14" />
                    </div>
                </div>

                <div className="flex-1 space-y-[20px]">
                    <div className="space-x-[24px]">
                        <Heading>DJI MAVIC 3 PRO</Heading>
                        <div className="flex items-center space-x-12 text-center">
                            <Stars rattings={5} />
                            <h1>250 Reviews</h1> {/* Number of reivews */}
                        </div>
                        <div>${price || '500'}</div>
                        <div>Short description</div>
                        <div>Color: Green</div>
                    </div>
                    <div></div>
                    <div className="space-x-[16px]">
                        <Button className="text center h-[48px] w-[169px] px-[32px] py-[12px]">
                            Buy Now
                        </Button>
                        <Button
                            variant="outline"
                            className="text center h-[48px] w-[169px] px-[32px] py-[12px]"
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>

            {/* Facility */}
            {/* <div className="sm:col-row-2 w-full justify-between gap-y-4 sm:grid sm:grid-cols-2 md:flex md:flex-wrap"> */}
            <div className='mx-auto'>
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {/* <div className="flex-1"> */}
                    <ServiceCard label="FREE SHIPPING">
                        <DeliveryIcon />
                    </ServiceCard>
                    {/* </div> */}

                    <ServiceCard label="FREE SHIPPING">
                        <ReturnIcon />
                    </ServiceCard>

                    <ServiceCard label="FREE SHIPPING">
                        <WarrentyIcon />
                    </ServiceCard>
                    <ServiceCard label="FREE SHIPPING">
                        <PaymentIcon />
                    </ServiceCard>
                </div>
            </div>

            <div className="pointer font-mebdium flex w-full items-center justify-center gap-x-4 py-20 text-4xl md:gap-x-3 lg:gap-x-4">
                <button
                    onClick={() => setActiveSection('description')}
                    className={`${activeSectoin === 'description' ? 'border-b-4 border-[#476b16] text-[#476B16]' : 'text-[#475569]'} px-1 py-2 text-sm sm:px-2 sm:text-[18px] md:px-4 md:text-2xl lg:px-[14px] lg:py-3`}
                >
                    Description
                </button>
                <button
                    onClick={() => setActiveSection('specification')}
                    className={`${activeSectoin === 'specification' ? 'border-b-4 border-[#476b16] text-[#476B16]' : 'text-[#475569]'} px-1 py-2 text-sm sm:px-2 sm:text-[18px] md:px-4 md:text-2xl lg:px-[14px] lg:py-3`}
                >
                    Specification
                </button>
                <button
                    onClick={() => setActiveSection('review')}
                    className={`${activeSectoin === 'review' ? 'border-b-4 border-[#476b16] text-[#476B16]' : 'text-[#475569]'} px-1 py-2 text-sm sm:px-2 sm:text-[18px] md:px-4 md:text-2xl lg:px-[14px] lg:py-3`}
                >
                    Reviews
                </button>
            </div>

            {/* ProductDetail */}
            <div>
                {/* <FacilityCard /> */}
                {activeSectoin === 'description' && <ProductDescription />}
                {activeSectoin === 'specification' && (
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}
                {activeSectoin === 'review' && (
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )}
            </div>
        </div>
    );
}
