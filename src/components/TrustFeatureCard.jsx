export default function TrustFeatureCard({ icon, title, description }) {
    return (
        <article className="flex min-h-30 flex-1 flex-col items-center justify-center px-4 py-3 text-center">
            <div className="mb-3 flex size-11 items-center justify-center rounded-[8px] bg-[#8BEA1E] text-[#0F172A] p-3">
                {icon}
            </div>
            <h3 className="text-[16px] font-medium text-[#0F172A] lg:text-[18px]">
                {title}
            </h3>
            <p className="mt-1 max-w-65 text-[13px] leading-5 text-[#0F172A] lg:text-[14px]">
                {description}
            </p>
        </article>
    );
}
