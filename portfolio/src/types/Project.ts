import type { StaticImageData } from "next/image";

export interface Project {
  name: string;
  logo: StaticImageData;
  link: string;
  description: string;
}
