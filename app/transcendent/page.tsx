import TabBar from "@/components/Tab-bar";
import Skeleton from "@/components/Skeleton";
import TextBox from "@/components/TextBox";

export default function Transcendent() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TabBar />
      <Skeleton 
        vSrc="/transcendent/zero.mp4"
      />
      <TextBox
        content="넥슨 메이플스토리의 직업군에 관한 간략한 소개를 하는 웹페이지 입니다. 
        tailwindCSS를 사용한 반응형 디자인에 관한 연습을 위해서 제작 되었습니다."
      />
    </main>
  );
}