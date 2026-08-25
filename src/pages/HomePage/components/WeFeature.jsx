import Label from '@/components/Label';
import FeatureIcon from '../../../assets/featureIcon.svg?react';
import Heading from '@/components/Heading';
import CategoryCard from '@/components/CategoryCard';

export default function WeFeature() {
    return (
        <div className="space-y-[28px] bg-[#F1F5F9] p-[32px] py-5 md:mx-[26px] md:rounded-[16px] md:py-8 lg:space-y-[48px] lg:py-12">
            <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
                <Label label={'WE FEATURE'}>
                    <FeatureIcon />
                </Label>

                <Heading className="line-clamp-2">
                    Seeking Adventure Thrills and Excitement Await
                </Heading>
            </div>
            <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
                <CategoryCard
                    name="Camera Drone"
                    image="https://tse1.mm.bing.net/th/id/OIP.QPPyWcqphBqxvhNMNOo8HwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    description="Stable aerial cameras designed for capturing stunning cinematic videos. "
                />
                <CategoryCard
                    name="FVP Drone"
                    description="High-speed racing drones built for thrilling, immersive first-person flight. "
                />
                <CategoryCard
                    name="Toy Drone"
                    description="Easy-to-fly mini drones built for indoor flips and outdoor fun. Perfect for beginners and kids! "
                />
                <CategoryCard
                    name="Industrial Drone"
                    image="https://images.pexels.com/photos/34182337/pexels-photo-34182337.jpeg"
                    description="Advanced autonomous drones engineered for precision mapping and industrial inspection."
                />
            </div>
        </div>
    );
}
