// components
import Skeleton from "@/components/Skeleton";
import TextBox from "@/components/TextBox";

export default function Leff() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Skeleton 
        vSrc="/leff/ark.mp4"
      />
      <TextBox
        content=""
      />
    </main>
  );
}