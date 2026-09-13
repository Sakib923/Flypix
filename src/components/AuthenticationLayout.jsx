import { Button } from './ui/button';
import Heading from './Heading';
import { cn } from '@/lib/utils';

function AuthenticationLayout({ imageLink, children, className }) {
    return (
        <div
            className={cn(
                'flex bg-[#F8FAFC] px-4 py-8 sm:px-7 md:px-10 lg:px-25.5 xl:px-41.25 2xl:px-41.25',
                className
            )}
        >
            <div className="hidden flex-1 overflow-hidden bg-red-400 md:block">
                <img
                    src={imageLink}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex-1 space-y-4 px-0 py-8 sm:space-y-4.75 sm:px-4 sm:py-8.5 md:space-y-5.5 md:bg-white md:px-8 md:py-9 lg:space-y-6.75 lg:px-12 lg:py-9.5 xl:space-y-8 xl:px-16 xl:py-10 2xl:space-y-8 2xl:px-16 2xl:py-10">
                {children}
            </div>
        </div>
    );
}

function AuthenticationHeader({ title, subtitle, className }) {
    return (
        <div className={cn('space-y-2 text-center', className)}>
            <Heading>{title}</Heading>
            <p className="text-[14px] text-[#475569] sm:text-[14px] md:text-[14px] lg:text-[19px] xl:text-[20px] 2xl:text-[24px]">
                {subtitle}
            </p>
        </div>
    );
}

function AuthenticationContent({ children, className }) {
    return (
        <div
            className={cn(
                'space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3.5 xl:space-y-4 2xl:space-y-4',
                className
            )}
        >
            {children}
        </div>
    );
}

function AuthenticationForm({ children, onSubmit, className }) {
    return (
        <form className={cn('space-y-8', className)} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

function AuthenticationSubmitButton({
    children = 'Submit',
    className,
    ...props
}) {
    return (
        <Button
            type="submit"
            {...props}
            className={cn(
                'h-9 w-full py-4 text-[12px] sm:h-9.5 sm:text-[13px] md:h-10 md:text-[14px] lg:h-11 lg:text-[16px] xl:h-12 xl:text-[18px] 2xl:h-12 2xl:text-[18px]',
                className
            )}
        >
            {children}
        </Button>
    );
}

function AuthenticationFooter({ children, className }) {
    return (
        <div
            className={cn(
                'flex items-center justify-center gap-x-1 text-center text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px]',
                className
            )}
        >
            {children}
        </div>
    );
}

export {
    AuthenticationLayout,
    AuthenticationHeader,
    AuthenticationContent,
    AuthenticationForm,
    AuthenticationSubmitButton,
    AuthenticationFooter,
};

export default AuthenticationLayout;
