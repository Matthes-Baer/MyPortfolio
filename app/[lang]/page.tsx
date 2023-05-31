import type { INormalPageProps } from "@/utils/interfaces";

export default function Home(props: INormalPageProps) {
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

      <ul>
        <li>To-do:</li>
        <li>Weitere Extra Files anschauen (loading.tsx)</li>
        <li>
          Tailwind Config anfänglich bearbeiten mit Farbpalette - muss
          vermutlich öfters überarbeitet werden anfangs
        </li>
      </ul>
    </main>
  );
}
