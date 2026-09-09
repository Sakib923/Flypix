import ContactInfoItem from '@/components/ContactInfoItem';
import FormField from '@/components/FormField';
import Heading from '@/components/Heading';
import TrustFeatureCard from '@/components/TrustFeatureCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import PaymentIcon from '@/assets/payment.svg?react';
import DeliveryIcon from '@/assets/delivery.svg?react';
import WarrantyIcon from '@/assets/warrenty.svg?react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="pt-8 space-y-20">
            <div className="mx-auto flex max-w-[1280px] min-w-full justify-between px-20">
                {/* Contact Us */}
                <div className="w-full max-w-136.25 space-y-10">
                    <div>
                        <Heading className="text-[32px]">Contact Us</Heading>
                        <div>
                            "Have inquiries about our fashion offerings? Need
                            assistance with orders or wholesale partnerships?
                            Reach out to us, and we'll provide the support you
                            require."
                        </div>
                    </div>
                    <div className="space-y-8">
                        <ContactInfoItem
                            icon={'h'}
                            value="1/4 1st Floor, Tolarbagh, Mirpur, Dhaka, Bangladesh"
                        />
                        <ContactInfoItem
                            icon={'j'}
                            label="Call Us"
                            value="+8801305-093231"
                        />

                        <ContactInfoItem
                            icon={'j'}
                            label="Email Us"
                            value="iconstyle19@gmail.com"
                        />
                    </div>
                </div>

                {/* Send Us your query */}
                <div>
                    <Heading className="!lg:text-[24px] text-[18px]">
                        Send us your query to us
                    </Heading>
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-[370px] space-y-5 rounded-[8px] border border-[#D9E2EC] bg-white p-6"
                        >
                            <FormField
                                label="Full Name"
                                name="fullName"
                                placeholder="First name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />

                            <FormField
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <FormField
                                label="Your Message"
                                name="message"
                                placeholder="Write your message here..."
                                multiline
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <Button type="submit" className="h-[42px] w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <section className="flex flex-col bg-[#E2E8F0] py-8 md:flex-row md:divide-x-2">
                <TrustFeatureCard
                    icon={<PaymentIcon />}
                    title="SECURE PAYMENTS"
                    description="Our website uses the latest secure payment gateway"
                />

                <TrustFeatureCard
                    icon={<DeliveryIcon />}
                    title="24/7 ONLINE SUPPORT"
                    description="Our agent is always ready to give you the required services"
                />

                <TrustFeatureCard
                    icon={<WarrantyIcon />}
                    title="2 YRS SERVICE WARRANTY"
                    description="Go tension free limitless with our warranty coverage"
                />
            </section>
        </div>
    );
}
