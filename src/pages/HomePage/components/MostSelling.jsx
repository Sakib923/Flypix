import Heading from '@/components/Heading';
import Label from '@/components/Label';
import FireIcon from '../../../assets/fire.svg?react';
import MostSellingItemCard from '@/components/MostSellingItemCard';
import DroneImage from "../../../assets/images/Drone.png";

export default function MostSelling() {
    // Here we have to fetch some most selling drone and then map through them with MostSellingCard component

    return (
        <div className="flex flex-col items-start gap-[24px]  py-[26px] bg-[#F8FAFC]">
            <div className="flex flex-col items-center px-[16px] justify-center gap-[16px] self-stretch">
                <Label label="Most Selling">
                    {' '}
                    <FireIcon />{' '}
                </Label>
                <Heading className="text-center">
                    Grab the Best Deal Offered Specially for You
                </Heading>
            </div>
            <div className='flex gap-[20px] px-[16px] items-start self-stretch overflow-scroll scrollbar-none'>
                <MostSellingItemCard name="DJI mavic mini" price="550" image={DroneImage} />
                <MostSellingItemCard name="DJI mavic mini" price="550" image={DroneImage} />
                <MostSellingItemCard name="DJI mavic mini" price="550" image={DroneImage} />
            </div>
        </div>
    );
}
