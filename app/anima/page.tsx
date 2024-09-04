// components
import Skeleton from "@/components/Skeleton";
import TextBox from "@/components/TextBox";

export default function Anima() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Skeleton 
        vSrc="/anima/lara.mp4"
        styles="w-2/5 h-2/5"
      />
      <TextBox
        content=""
      />
    </main>
  );
}