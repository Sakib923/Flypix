import FeatureCard from '@/components/FeatureCard';
import FeatureText from '@/components/FeatureText';
import Heading from '@/components/Heading';

export default function DescriptionSection() {
    return (
        <div>
            <div className="space-y-8">
                <img src="" alt="" className="h-114.5 w-full" />
                <Heading>
                    DJI MAVIC 3 PRO : The new Era of Drone Industry
                </Heading>
                <p className="text-justify text-[26px] text-[#475569]">
                    Lorem ipsum dolor sit amet consectetur. Elit eu a sed at a
                    enim. In sed enim nibh lorem commodo arcu tempus. Lectus
                    pellentesque aliquam tristique amet volutpat pharetra
                    vulputate. Ultricies tempor magna bibendum ac feugiat sed
                    dignissim purus tellus. Odio semper vestibulum sed eget.
                    Bibendum egestas tincidunt mauris sed magna in cursus.
                    Aliquam id feugiat sed amet lectus at. Ante in sed turpis
                    urna. Blandit purus dolor enim ipsum ullamcorper arcu arcu
                    convallis porttitor. Ultricies tempor magna bibendum ac
                    feugiat sed dignissim purus tellus. Odio semper vestibulum
                    sed eget. Bibendum egestas tincidunt mauris sed magna in
                    cursus. Aliquam id feugiat sed amet lectus at. Ante in sed
                    turpis urna. Blandit purus dolor enim ipsum ullamcorper arcu
                    arcu convallis porttitor.
                </p>
            </div>
            <div>
                <Heading>Premium Features</Heading>
                <div className="mb-10 flex flex-col md:mb-12 md:flex-row md:items-center md:gap-x-7 lg:mb-[120px] lg:gap-x-12">
                    <div className="flex-1 space-y-[24px] lg:space-y-[60px]">
                        <div className="grid auto-cols-fr grid-flow-col grid-rows-2 gap-3">
                            <FeatureCard heading="Width" label="35 mm" />
                            <FeatureCard heading="Weight" label="0.4 kg" />
                            <FeatureCard heading="Height" label="18 sm" />
                            <FeatureCard heading="Speed" label="80 km/h" />
                            <FeatureCard heading="Autonamy" label="30 min" />
                            <FeatureCard heading="Range" label="5 km" />
                        </div>
                        <div className="space-y-[8px] lg:space-y-[16px]">
                            <FeatureText feature="Lorem ipsum dolor sit amet consectetur. Elit eu a sed at a enim." />
                            <FeatureText feature="Consectetur. Elit eu a sed at a enim." />
                            <FeatureText feature="Sit lorem ipsum dolor sit amet amet consectetur" />
                            <FeatureText feature="Lorem ipsum dolor sit amet consectetur. Elit eu a sed at a enim." />
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://tse1.mm.bing.net/th/id/OIP.BG-kYSMrvQgiXo0bzUWlLQHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                            alt=""
                            className="h-auto w-full"
                        />
                    </div>
                </div>
                <div className="space-y-8 pb-10 md:pb-12 lg:pb-[120px]">
                    <Heading>DJI MAVIC 3 PRO</Heading>
                    <p className="text-justify text-[26px] text-[#475569]">
                        Lorem ipsum dolor sit amet consectetur. Elit eu a sed at
                        a enim. In sed enim nibh lorem commodo arcu tempus.
                        Lectus pellentesque aliquam tristique amet volutpat
                        pharetra vulputate. Ultricies tempor magna bibendum ac
                        feugiat sed dignissim purus tellus. Odio semper
                        vestibulum sed eget. Bibendum egestas tincidunt mauris
                        sed magna in cursus. Aliquam id feugiat sed amet lectus
                        at. Ante in sed turpis urna. Blandit purus dolor enim
                        ipsum ullamcorper arcu arcu convallis porttitor.
                        Ultricies tempor magna bibendum ac feugiat sed dignissim
                        purus tellus. Odio semper vestibulum sed eget. Bibendum
                        egestas tincidunt mauris sed magna in cursus. Aliquam id
                        feugiat sed amet lectus at. Ante in sed turpis urna.
                        Blandit purus dolor enim ipsum ullamcorper arcu arcu
                        convallis porttitor.
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    );
}
