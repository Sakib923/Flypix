export default function StorySection({
    children,
    image,
    imageAlt = '',
    imagePosition = 'right',
}) {
    const imageOnLeft = imagePosition === 'left';

    return (
        <div
            className={`flex flex-col-reverse items-center justify-between gap-4 sm:gap-7 md:gap-10 lg:gap-15 xl:gap-20 2xl:gap-20 ${imageOnLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
            <div className="flex flex-1 flex-col items-center justify-center space-y-3 text-center sm:space-y-3.5 md:items-start md:justify-start md:space-y-4 md:text-start lg:space-y-5 xl:space-y-5.5 2xl:space-y-6">
                {children}
            </div>
            <div className="flex h-53 w-full overflow-hidden md:h-90 md:flex-1 md:items-end md:justify-end">
                <img
                    src={image}
                    className="h-full w-full object-cover"
                    alt={imageAlt}
                />
            </div>
        </div>
    );
}
