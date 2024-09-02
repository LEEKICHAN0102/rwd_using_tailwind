import Image from "next/image";

interface IProps {
  src: string;
}

export default function CharacterImage({ src }: IProps) {
  return(
    <Image src={`/image${src}`} alt={src} width={500}
    height={500} />
  )
}