// components
import TextBox from "@/components/TextBox";
import CharacterImage from "@/components/CharacterImage";

export default function Nova() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CharacterImage 
        src="/nova/angelic_buster.webp"
      />
      <TextBox
        content=""
      />
    </main>
  );
}