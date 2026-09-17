import Heading from '@/components/Heading';
import Label from '@/components/Label';
import FireIcon from '../../../assets/fire.svg?react';
import MostSellingItemCard from '@/components/MostSellingItemCard';
import DroneImage from '../../../assets/images/Drone.png';

export default function MostSelling() {
    // Here we have to fetch some most selling drone and then map through them with MostSellingCard component

    return (
        <div className="flex flex-col items-start gap-6 bg-[#F8FAFC] py-6.5">
            <div className="flex flex-col items-center justify-center gap-4 self-stretch px-4 sm:px-7 md:px-10 lg:px-15 xl:px-20 2xl:px-20">
                <Label label="Most Selling">
                    {' '}
                    <FireIcon />{' '}
                </Label>
                <Heading className="text-center">
                    Grab the Best Deal Offered Specially for You
                </Heading>
            </div>
            <div className="flex w-full scrollbar-none items-start gap-5 self-stretch overflow-scroll px-4 sm:px-7 md:px-10 lg:px-15 xl:px-20 2xl:px-20">
                <MostSellingItemCard
                    name="DJI mavic mini"
                    price="550"
                    image={DroneImage}
                />
                <MostSellingItemCard
                    name="DJI mavic mini"
                    price="550"
                    image={DroneImage}
                />
                <MostSellingItemCard
                    name="DJI mavic mini"
                    price="550"
                    image={DroneImage}
                />
            </div>
        </div>
    );
}
