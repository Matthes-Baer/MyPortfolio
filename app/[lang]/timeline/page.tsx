import { headers } from "next/headers";

export default function Timeline(params: { lang: String }) {
  const headersList = headers();
  console.log(headersList, params.lang);

  return <div>Hello World!</div>;
}
