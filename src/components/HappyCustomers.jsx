import Label from '@/components/Label';
import HappyCustomerIcon from '../assets/happyCustomer.svg?react';
import Heading from '@/components/Heading';
import CustomerFeedbackCard from '@/components/CustomerFeedbackCard';

export default function HappyCustomers() {
    return (
        <div className="space-y-[34px] bg-[#0F172A] py-[20px] text-white">
            <div className="flex flex-col items-center justify-center space-y-[12px] text-center">
                <Label label="HAPPY CUSTOMERS" labelClassName="text-[#99E830]">
                    <HappyCustomerIcon />
                </Label>
                <Heading className="text-white">
                    Satisfaction By Our Happy Clients
                </Heading>
            </div>
            <div className="flex scrollbar-none space-x-[16px] overflow-scroll px-[16px]">
                <CustomerFeedbackCard
                    customerName="Mizanur Rahman"
                    feedback="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet dolor sit amet, consectetur "
                />
                <CustomerFeedbackCard
                    customerName="Mizanur Rahman"
                    feedback="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet dolor sit amet, consectetur "
                />
                <CustomerFeedbackCard
                    customerName="Mizanur Rahman"
                    feedback="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet dolor sit amet, consectetur "
                />
            </div>
        </div>
    );
}
