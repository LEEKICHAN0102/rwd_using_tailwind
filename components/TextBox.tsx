// TextBox Props : 추후 크기도 받을 수 있을 듯
interface TProps {
  content: string;
  textColor?: string; // Need Mapping
}

export default function TextBox({ content, textColor }: TProps) {
  return(
    <div className="h-auto w-3/4 border-4 rounded-md font-maple border-gray-600 p-12 text-lg">
      <p>
        {content}
      </p>
    </div>
  )
}