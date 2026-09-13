import FormField from '@/components/FormField';
import Heading from '@/components/Heading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function SignInPage() {
    return (
        <div className="flex bg-[#F8FAFC] px-4 py-8 sm:px-7 md:px-10 lg:px-25.5 xl:px-41.25 2xl:px-41.25">
            <div className="hidden flex-1 overflow-hidden border-[#CBD5E1] bg-red-400 md:block md:rounded-l-[16px] md:border-y md:border-l">
                <img
                    src="https://www.militarytimes.com/resizer/v2/JOORVJXOCJAHVCGIIDAO2V5C3E.jpg?auth=ddc62ed69cee1fe395e0a074b52d4279fe93b454ad788b938cc494907474000d"
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex-1 space-y-4 border-[#CBD5E1] px-0 py-8 sm:space-y-4.75 sm:px-4 sm:py-8.5 md:space-y-5.5 md:rounded-r-[16px] md:border-y md:border-r md:bg-white md:px-8 md:py-9 lg:space-y-6.75 lg:px-12 lg:py-9.5 xl:space-y-8 xl:px-16 xl:py-10 2xl:space-y-8 2xl:px-16 2xl:py-10">
                <div className="space-y-8">
                    <div className="space-y-2 text-center">
                        <Heading className="">Welcome to Flypix</Heading>
                        <p className="text-[14px] text-[#475569] sm:text-[14px] md:text-[14px] lg:text-[19px] xl:text-[20px] 2xl:text-[24px]">
                            Login to your account to continue
                        </p>
                    </div>
                    <div className="space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3.5 xl:space-y-4 2xl:space-y-4">
                        <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                            fieldClassName="py-[4px] bg-red-400 text-white"
                            placeholder="Email address"
                            value={'formData' + '.email'}
                            onChange={'handleChange'}
                        />
                        <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="Email address"
                            value={'formData' + '.email'}
                            onChange={'handleChange'}
                        />
                        <FormField
                            label="Email Address"
                            name="email"
                            type="email"
                            className="space-y-2"
                            placeholder="Email address"
                            value={'formData' + '.email'}
                            onChange={'handleChange'}
                        />
                    </div>
                    <div className="w-full">
                        <Button className="h-9 w-full py-4 text-[12px] sm:h-9.5 sm:text-[13px] md:h-10 md:text-[14px] lg:h-11 lg:text-[16px] xl:h-12 xl:text-[18px] 2xl:h-12 2xl:text-[18px]">
                            Sign In
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-1 text-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px]">
                    <p className="">Don’t have an account?</p>
                    <Link to={'/signup'}>
                        <span className="font-medium text-[#77B526] underline">
                            {' '}
                            Sign Up
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
