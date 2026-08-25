import Icon from '../assets/icon.svg?react';

export default function CompanyLogo({className = ""}) {
    return (
        <div className="ml-4 flex space-x-[4px] md:space-x-[12px]" >
            <Icon className={`${className} h-5 md:h-6 lg:h-10 w-fit`} />
            <h1 className="font-orbitral text-[14px] font-medium md:text-[16px] lg:text-[26px]">
                Flypix
            </h1>
        </div>
    );
}
