// components
import TextBox from "@/components/TextBox";
import CharacterImage from "@/components/CharacterImage";

export default function Adventurer() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharacterImage 
        src="/adventurer/adventurer.webp"
      />
      <TextBox
        content=""
      />
    </main>
  );
}