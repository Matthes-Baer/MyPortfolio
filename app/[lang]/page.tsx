import Switch_language_link_comp from "@/components/layout/switch_language_link_comp";
import type { INormalPageProps } from "@/utils/interfaces";

export default function Language_Picker(props: INormalPageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Switch_language_link_comp language="de">
        <div>German</div>
      </Switch_language_link_comp>
      <Switch_language_link_comp language="en">
        <div>English</div>
      </Switch_language_link_comp>
    </main>
  );
}
