import Heading from '@/components/Heading';
import aboutBanner from '../../assets/images/aboutBanner.png';
import { Button } from '@/components/ui/button';
import DeliveryIcon from '@/assets/delivery.svg?react';
import PaymentIcon from '@/assets/payment.svg?react';
import WarrantyIcon from '@/assets/warrenty.svg?react';
import TrustFeatureCard from '@/components/TrustFeatureCard';
import WeFeature from '@/components/WeFeature';
import HappyCustomers from '@/components/HappyCustomers';
import StorySection from './components/StorySection';
export default function AboutPage() {
    return (
        <div className="space-y-12 pt-8 pb-30 sm:space-y-13 md:space-y-14 lg:space-y-20 xl:space-y-26 2xl:space-y-30">
            <div
                id="aboutPage"
                className="block h-fit space-y-12 px-4 sm:space-y-13 sm:px-7 md:space-y-14 md:px-9 lg:space-y-20 lg:px-14 xl:space-y-26 xl:px-17 2xl:space-y-30 2xl:px-22"
            >
                {/* Banner */}
                <div className="relative h-fit max-h-76 w-full overflow-hidden rounded-[8px]">
                    <img
                        src={aboutBanner}
                        alt=""
                        className="-z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-6 py-6 text-white sm:px-22.5 sm:py-9.25 md:px-31 md:py-12 lg:px-43 lg:py-14.5 xl:px-53.5 xl:py-18 2xl:px-64 2xl:py-20">
                        <Heading className="text-center text-[#A8FF35]">
                            About Us
                        </Heading>
                        <p className="text-center text-base sm:text-[20px] md:text-[24px] lg:text-[29px] xl:text-[36px] 2xl:text-[42px]">
                            WE provide you the best imaging and Flying
                            Experiences!
                        </p>
                    </div>
                </div>

                {/* Our Story */}
                <StorySection
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkk_6taiIpcaQ5d78IpITaI7ZU7Hye7HPDP0jcg-ysJImyS7lZi48smc&s=10"
                    imageAlt="Customers shopping at the drone store"
                >
                    <div className="space-y-1 lg:space-y-1.5 xl:space-y-1.75 2xl:space-y-2">
                        <Heading className="text-[#476B16]">Our Story</Heading>
                        <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px]">
                            The Story of Our Drone Shop & Commitment to
                            Excellence
                        </p>
                    </div>
                    <p className="text-[12px] text-[#475569] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px]">
                        Welcome to Iconic Style, your premier destination for
                        exquisite fashion products including three-piece
                        ensembles and sarees. At Iconic Style, we believe that
                        fashion is a
                    </p>
                    <Button>Read More</Button>
                </StorySection>
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

            {/* Story of CEO */}
            <div className="px-4 sm:px-7 md:px-9 lg:px-14 xl:px-17 2xl:px-22">
                <StorySection
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkk_6taiIpcaQ5d78IpITaI7ZU7Hye7HPDP0jcg-ysJImyS7lZi48smc&s=10"
                    imageAlt="Customers shopping at the drone store"
                    imagePosition="left"
                >
                    <div>
                        <Heading className="text-[#476B16]">
                            STORY OF CEO
                        </Heading>
                        <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px]">
                            Tale of Our CEO’s Leadership and Vision That Drives
                            Our Success
                        </p>
                    </div>
                    <p className="text-[16px]">
                        Welcome to Iconic Style, your premier destination for
                        exquisite fashion products including three-piece
                        ensembles and sarees. At Iconic Style, we believe that
                        fashion is a r exquisite fashion products Welcome to
                        Iconic Style, your premier destination for exquisite
                        fashion products including three-piece ensembles and
                        sarees. At Iconic Style.
                    </p>
                    <Button>Read More</Button>
                </StorySection>
            </div>
            <WeFeature />
            <HappyCustomers />
        </div>
    );
}
