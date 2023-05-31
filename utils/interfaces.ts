interface ILanguageParams {
  lang: string;
}

export interface INormalPageProps {
  params: ILanguageParams;
}

export interface INormalLayoutProps {
  children: React.ReactNode;
  params: ILanguageParams;
}
