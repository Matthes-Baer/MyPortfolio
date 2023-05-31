import type { INormalPageProps } from "@/utils/interfaces";

export default function Home(props: INormalPageProps) {
  console.log(props.params.lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Main</div>
      <ul>
        <li>Notizen:</li>
        <li>
          Vor Build im types file ggf. @ts-ignore hinzufügen, wenn etwas nicht
          funktioniert; siehe layout
        </li>
      </ul>
    </main>
  );
}
