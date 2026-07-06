import Image from "next/image";

export function CafeGallery({
  images,
  totalCount,
}: {
  images: { src: string; alt: string }[];
  totalCount: number;
}) {
  const [feature, ...rest] = images;

  return (
    <section>
      <h2 className="mb-8 border-b border-tertiary/10 pb-4 font-headline-md text-headline-md font-semibold text-roasted-espresso">
        Gallery
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="relative col-span-2 row-span-2 h-64 overflow-hidden rounded-lg md:h-full">
          <Image
            src={feature.src}
            alt={feature.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        {rest.map((image, i) => {
          const isLast = i === rest.length - 1;
          return (
            <div
              key={image.src}
              className="group relative h-32 overflow-hidden rounded-lg md:h-48"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {isLast && (
                <div className="absolute inset-0 flex items-center justify-center bg-roasted-espresso/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="font-label-md text-label-md text-cream-foam">
                    View All {totalCount}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
