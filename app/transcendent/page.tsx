// components
import Skeleton from "@/components/Skeleton";
import TextBox from "@/components/TextBox";

export default function Transcendent() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Skeleton 
        vSrc="/transcendent/zero.mp4"
      />
      <TextBox
        content=""
      />
    </main>
  );
}