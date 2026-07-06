import Image from "next/image";

export function EditorialItem({
  tag,
  tagClasses,
  image,
  title,
  description,
  author,
  readTime,
}: {
  tag: string;
  tagClasses: string;
  image: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
}) {
  return (
    <div className="group flex cursor-pointer flex-col gap-6 md:flex-row">
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg opacity-90 transition-opacity group-hover:opacity-100 md:h-32 md:w-48">
        <Image src={image} alt={title} fill sizes="(min-width: 768px) 192px, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <span className={`mb-2 font-label-caps text-label-caps uppercase tracking-widest ${tagClasses}`}>
          {tag}
        </span>
        <h3 className="mb-2 font-headline-sm text-headline-sm text-primary transition-colors group-hover:text-bean-origin-gold">
          {title}
        </h3>
        <p className="mb-3 line-clamp-2 font-body-md text-body-md text-on-surface-variant">
          {description}
        </p>
        <div className="flex items-center gap-2 font-label-caps text-label-caps text-on-tertiary-container">
          <span>By {author}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
