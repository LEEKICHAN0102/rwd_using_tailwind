import TextBox from "@/components/TextBox";
import Skeleton from "@/components/Skeleton";
import CharacterImage from "@/components/CharacterImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-12">
      <CharacterImage
        src="/mainLogo.png"
      />
      <TextBox
        content={`넥슨 메이플스토리의 직업군에 관한 간략한 소개를 하는 웹페이지 입니다.\n
        tailwindCSS를 사용한 반응형 디자인에 관한 연습을 위해서 제작 되었습니다.`}
      />
    </main>
  );
}
