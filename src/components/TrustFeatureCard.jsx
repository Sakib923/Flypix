import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
    'flex min-h-30 flex-1 flex-col items-center justify-center px-4 py-3 text-center',
    {
        variants: {
            variant: {
                default: '',
                muted: 'bg-[#E2E8F0]',
                about: 'bg-[#0F172A]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const iconVariants = cva(
    'mb-3 flex size-11 items-center justify-center rounded-[8px] p-3',
    {
        variants: {
            variant: {
                default: 'bg-[#8BEA1E] text-[#0F172A]',
                muted: 'bg-[#8BEA1E] text-[#0F172A]',
                about: 'bg-[#A8FF35] text-[#0F172A]',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const titleVariants = cva('text-[16px] font-medium lg:text-[18px]', {
    variants: {
        variant: {
            default: 'text-[#0F172A]',
            muted: 'text-[#0F172A]',
            about: 'text-white',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const descriptionVariants = cva(
    'mt-1 max-w-65 text-[13px] leading-5 lg:text-[14px]',
    {
        variants: {
            variant: {
                default: 'text-[#0F172A]',
                muted: 'text-[#0F172A]',
                about: 'text-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export default function TrustFeatureCard({
    icon,
    title,
    description,
    className,
    variant,
}) {
    return (
        <article className={cn(cardVariants({ variant }), className)}>
            <div className={iconVariants({ variant })}>{icon}</div>
            <h3 className={titleVariants({ variant })}>{title}</h3>
            <p className={descriptionVariants({ variant })}>{description}</p>
        </article>
    );
}
