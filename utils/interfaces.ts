import { ObjectId } from "mongodb";
import { StaticImageData } from "next/image";

interface ILanguageParams {
  lang: string;
}

export interface IImage_Props {
  src: string;
  alt: { en: string; de: string };
}

export interface IImages {
  [key: string]: IImage_Props;
}

export interface IProjects {
  [key: string]: IImage_Props[];
}

export interface INormalPageProps {
  params: ILanguageParams;
}

export interface IRootLayoutProps {
  children: React.ReactNode;
  params: ILanguageParams;
}

export interface IResponse {
  name: string;
  value: string;
}

export interface IMetadata {
  title: string;
  description: string;
}

export interface ICard {
  card_index: number;
  name: string;
  stars: number;
  description: { en: string; de: string };
}

export interface IProject {
  filter_id: number;
  project_key: string;
  name: { en: string; de: string };
  techstack: string[];
  links: { project: string; github: string };
  description: { en: string; de: string };
}

export interface IIcon {
  icon: StaticImageData;
  link: string;
  alt: string;
}
