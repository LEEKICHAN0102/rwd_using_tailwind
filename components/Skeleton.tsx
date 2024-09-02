interface SProps {
  vSrc: string;
  playBackSpeed?: number;
}

export default function Skeleton({ vSrc }: SProps) {
  return(
    <video
      src={`/skeleton${vSrc}`}
      className="w-1/2 h-1/2"
      loop muted playsInline autoPlay
    />
  )
};