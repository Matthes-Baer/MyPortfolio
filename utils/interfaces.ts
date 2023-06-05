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
