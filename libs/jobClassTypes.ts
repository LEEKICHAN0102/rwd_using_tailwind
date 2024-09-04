// icons
import { GiAxeSword, GiLightningBow, GiWizardStaff, GiBandit, GiPirateFlag } from "react-icons/gi";

// 직업 전용 Badge를 위한 Type 매핑
export const jobClassType = [
  {
    value: "warrior",
    label: "전사",
    icon: GiAxeSword,
  },
  {
    value: "archer",
    label: "궁수",
    icon: GiLightningBow,
  },
  {
    value: "wizard",
    label: "마법사",
    icon: GiWizardStaff,
  },
  {
    value: "bandit",
    label: "도적",
    icon: GiBandit,
  },
  {
    value: "pirate",
    label: "해적",
    icon: GiPirateFlag,
  },
];
