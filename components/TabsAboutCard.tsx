import { GetConvertedUrl } from "@/utils/Images";



/* eslint-disable @next/next/no-img-element */
interface CardProps {
  imageUrl: string;
  description: string;
  title: string;
  href: string;
}
export default function TabsAboutCard(post: CardProps) {

  return (
    <article className="overflow-hidden  bg-[#2C2338]   rounded-lg border shadow-sm">
      <img alt="" src={GetConvertedUrl(post.imageUrl)} className="h-56 w-full object-cover" />

      <div className="xl:p-4 p-2 sm:p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-[#f4f4f4]0">{post.title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-[#f4f4f4]">
          {post.description}
        </p>

        <a
          href={post.href}
          className="group  inline-flex mt-12 sm:mt-24 lg:mt-16 xl:mt-24 items-center gap-1 text-sm font-medium text-[#f4f4f4] underline"
        >
          Link to Page
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}
