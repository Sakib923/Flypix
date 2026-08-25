import Label from '@/components/Label';
import HappyCustomerIcon from '../../../assets/happyCustomer.svg?react';
import Heading from '@/components/Heading';
import CustomerFeedbackCard from '@/components/CustomerFeedbackCard';

export default function HappyCustomers() {
    return (
        <div className="bg-[#0F172A] text-white space-y-[34px] py-[20px]">
            <div className='flex flex-col items-center justify-center text-center space-y-[12px]'>
                <Label label="HAPPY CUSTOMERS" labelClassName="text-[#99E830]">
                    <HappyCustomerIcon />
                </Label>
                <Heading className="text-white">
                    Satisfaction By Our Happy Clients
                </Heading>
            </div>
            <div className='px-[16px] space-x-[16px] flex overflow-scroll scrollbar-none '>
                <CustomerFeedbackCard customerName="Mizanur Rahman" feedback="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet dolor sit amet, consectetur " />
                <CustomerFeedbackCard customerName="Mizanur Rahman" feedback="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet dolor sit amet, consectetur " />
                <CustomerFeedbackCard customerName="Mizanur Rahman" feedback="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet dolor sit amet, consectetur " />
            </div>
        </div>
    );
}
