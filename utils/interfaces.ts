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
