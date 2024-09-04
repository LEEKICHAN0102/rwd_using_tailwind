// components
import Skeleton from "@/components/Skeleton";
import TextBox from "@/components/TextBox";
import CygnusContainer from "@/components/job/CygnusContainer";

export default function Cygnus() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-8">
      <Skeleton 
        vSrc="/knights_of_cygnus/knights_of_cygnus.mp4"
        styles="w-1/2 h-1/2"
      />
      <TextBox
        title="용맹한 여제의 기사"
        content={`
          우리 시그너스 기사단은 하나된 이름으로 나아갈 것입니다.\n
          그리고, 기사단의 이름으로 함께 승리할 것입니다.\n
          시그너스 기사단. 출진하겠습니다!
        `}
        textColor="text-red-700"
      />
      <CygnusContainer />
    </main>
  );
}