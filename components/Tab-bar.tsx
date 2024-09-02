import Link from "next/link"

// libs
import { OccupationalType } from "@/libs/occupationalTypes"

export default function TabBar() {
  return(
    <nav>
      <ul className="flex gap-4 text-xl font-maple font-bold">
        {OccupationalType.map((occ) => (
          <li key={occ.value}>
            <Link href={`/${occ.value}`} >
              {occ.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}