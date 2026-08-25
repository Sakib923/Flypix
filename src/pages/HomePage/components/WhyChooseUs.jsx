// import Drone from
import Heading from '@/components/Heading';
import Stars from '../../../assets/stars.svg?react';
import WalletIcon from '../../../assets/wallet.svg?react';
import ExchangeIcon from '../../../assets/exchange.svg?react';

import Label from '@/components/Label';
import FacilityCard from '@/components/FacilityCard';
import { Button } from '@/components/ui/button';

export default function WhyChooseUs() {
    return (
        <div className="mt-[64px] flex flex-col justify-between gap-[40px] p-[16px] sm:p-[16px] md:flex-row md:gap-[32px] md:p-[40px] lg:p-[80px]">
            <div className="mx-auto flex flex-1 items-center justify-center">
                <img
                    src="src/assets/images/Images.png"
                    className="h-auto w-full max-w-[581px]"
                />
            </div>
            <div className="flex flex-1 flex-col justify-center space-y-[20px] lg:space-y-[48px]">
                <div className="flex flex-col items-center justify-center md:items-start md:space-y-[20px] lg:space-y-[24px]">
                    <div className="flex flex-col items-center justify-center space-y-[12px] text-center md:text-left">
                        <Label label={'WHY CHOOSE US'}>
                            <Stars />
                        </Label>
                        <Heading>
                            We provide Best Facilities to meet your Dream
                        </Heading>
                        <p className="text-center text-[14px] text-[#475569] md:text-left md:text-[16px]">
                            Et purus duis sollicitudin dignissim habitant.
                            Egestas nulla quis venenatis cras sed eu massa Et
                            purus duis sollicitudin dignissim habitant. Egesta
                        </p>
                    </div>
                    <div className="flex space-x-[12px] lg:space-x-[24px]">
                        <FacilityCard
                            facility="EMI Facilities"
                            feature1="20+ Banks Available"
                            feature2="0% Interest rate"
                        >
                            <WalletIcon />
                        </FacilityCard>
                        <FacilityCard
                            facility="Buy & Sell"
                            feature1="Sell old & Buy new"
                            feature2="Exchange best price"
                        >
                            <ExchangeIcon />
                        </FacilityCard>
                    </div>
                </div>
                <div>
                    <Button className="rounded-full px-[32px] py-[20px] text-[16px]">
                        Read More
                    </Button>
                </div>
            </div>
        </div>
    );
}
