// import Badge from "./Badge";

// TextBox Props : 추후 크기도 받을 수 있을 듯
interface TProps {
  content: string; // Textbox 내용
  title?: string; // 직업 한 줄 소개 HeadTitle
  textColor?: string; // Identity Color
}

export default function TextBox({ content, title, textColor }: TProps) {
  return(
    <div className="h-auto w-3/4 border-4 rounded-xl font-maple border-gray-600 p-8 text-xl whitespace-pre-line text-center">
      <div className={`text-2xl ${textColor}`}>
        {title}
      </div>
      {content}
    </div>
  )
}