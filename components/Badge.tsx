"use client";

import { jobClassType } from "@/libs/jobClassTypes";

interface BProps {
  job: string;
  cName: string;
}

export default function Badge({ job, cName }: BProps) {
  const jobInfo = jobClassType.find((jobItem) => jobItem.value === job);
  const JobIcon = jobInfo?.icon || null;

  const colorClass = {
    warrior: 'bg-warrior',
    archer: 'bg-archer',
    wizard: 'bg-wizard',
    bandit: 'bg-bandit',
    pirate: 'bg-pirate',
  }[jobInfo?.value || ''];


  return (
    <div className={`flex rounded-2xl items-center justify-center p-3 w-auto h-auto font-maple text-2xl text-white gap-2 ${colorClass}`}>
      {JobIcon && <JobIcon />}
      {cName}
    </div>
  );
}
