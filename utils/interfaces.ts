interface ILanguageParams {
  lang: string;
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

export interface IImage_Props {
  src: string;
  alt: string;
}

export interface ICard {
  card_index: number;
  value: string;
}
