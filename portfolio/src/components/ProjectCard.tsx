import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
  name,
  logo,
  link,
  description,
}: {
  name: string;
  logo: StaticImageData;
  link: string;
  description: string;
}) {
  return (
    <Link href={link} target="_blank" className="flex items-center">
      <div className="w-full flex items-center justify-between gap-4 px-2 py-4">
        <div className="flex items-center justify-center gap-4">
          {logo ? (
            <Image
              src={logo}
              alt="project-logo"
              width={100}
              height={100}
              className="size-10 object-cover rounded-lg "
            />
          ) : (
            <div className="size-10 bg-gray-200 rounded-lg" />
          )}
          <div className="h-full w-full">
            <h3 className="text- font-medium">{name}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="size-5"
          >
            <path
              fill="currentColor"
              d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
