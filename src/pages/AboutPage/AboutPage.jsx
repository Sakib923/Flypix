import Heading from '@/components/Heading';
import aboutBanner from '../../assets/images/aboutBanner.png';
import { Button } from '@/components/ui/button';
import DeliveryIcon from '@/assets/delivery.svg?react';
import PaymentIcon from '@/assets/payment.svg?react';
import WarrantyIcon from '@/assets/warrenty.svg?react';
import TrustFeatureCard from '@/components/TrustFeatureCard';
export default function AboutPage() {
    return (
        <div>
            <div id="aboutPage" className="block h-fit px-20">
                <div className="relative h-76 w-full overflow-hidden">
                    <img
                        src={aboutBanner}
                        alt=""
                        className="-z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-60 py-20 text-white">
                        <Heading className="text-center text-[#A8FF35]">
                            About Us
                        </Heading>
                        <p className="text-[40px]">
                            WE provide you the best imaging and Flying
                            Experiences!
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <div>
                            <Heading>Our Story</Heading>
                            <p className="text-[40px]">
                                The Story of Our Drone Shop & Commitment to
                                Excellence
                            </p>
                        </div>
                        <p className="text-[16px]">
                            Welcome to Iconic Style, your premier destination
                            for exquisite fashion products including three-piece
                            ensembles and sarees. At Iconic Style, we believe
                            that fashion is a
                        </p>
                        <Button>Read More</Button>
                    </div>
                    <div className="flex flex-1 items-end justify-end">
                        <img src="" className="h-[360px] w-[560px]" alt="" />
                    </div>
                </div>
            </div>
            <section className="-px-20 flex flex-col bg-[#0F172A] py-8 md:flex-row">
                <TrustFeatureCard
                    variant="about"
                    icon={<PaymentIcon />}
                    title="SECURE PAYMENTS"
                    description="Our website uses the latest secure payment gateway"
                />

                <TrustFeatureCard
                    variant="about"
                    icon={<DeliveryIcon />}
                    title="24/7 ONLINE SUPPORT"
                    description="Our agent is always ready to give you the required services"
                />

                <TrustFeatureCard
                    variant="about"
                    icon={<WarrantyIcon />}
                    title="2 YRS SERVICE WARRANTY"
                    description="Go tension free limitless with our warranty coverage"
                />
            </section>

            <div className="flex flex-row-reverse items-center justify-between px-20">
                    <div className="flex-1">
                        <div>
                            <Heading>Our Story</Heading>
                            <p className="text-[40px]">
                                The Story of Our Drone Shop & Commitment to
                                Excellence
                            </p>
                        </div>
                        <p className="text-[16px]">
                            Welcome to Iconic Style, your premier destination
                            for exquisite fashion products including three-piece
                            ensembles and sarees. At Iconic Style, we believe
                            that fashion is a
                        </p>
                        <Button>Read More</Button>
                    </div>
                    <div className="flex flex-1 ">
                        <img src="" className="h-[360px] w-[560px]" alt="" />
                    </div>
                </div>
        </div>
    );
}
