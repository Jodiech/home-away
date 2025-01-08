import { IconType } from "react-icons";
export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

import { RiFridgeLine } from "react-icons/ri";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { LuShowerHead, LuBedDouble, LuCircleParking } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import {
  FiWifi,
  FiWind,
  FiMonitor,
  FiKey,
  FiBook,
  FiMic,
  FiShield,
  FiTv,
  FiSmile,
  FiStar,
  FiUserCheck,
  FiScissors,
  FiDroplet,
  FiLock,
} from "react-icons/fi";

export const amenities: Amenity[] = [
  { name: "parking", icon: LuCircleParking, selected: false },
  { name: "fire pit", icon: MdOutlineLocalFireDepartment, selected: false },
  { name: "bbq grill", icon: FiWind, selected: false },
  { name: "hot shower", icon: LuShowerHead, selected: false },
  { name: "air conditioning", icon: TbAirConditioning, selected: false },
  { name: "bed linens", icon: LuBedDouble, selected: false },
  { name: "towels", icon: FiDroplet, selected: false },
  { name: "first aid kit", icon: FiTv, selected: false },
  { name: "wifi", icon: FiWifi, selected: false },
  { name: "smart lock", icon: FiKey, selected: false },
  { name: "books and magazines", icon: FiBook, selected: false },
  { name: "refrigerator", icon: RiFridgeLine, selected: false },
  { name: "workspace", icon: FiMonitor, selected: false },
  { name: "microwave", icon: FiMic, selected: false },
  { name: "security cameras", icon: FiShield, selected: false },
  { name: "pets allowed", icon: FiSmile, selected: false },
  { name: "child-friendly", icon: FiStar, selected: false },
  { name: "self-check-in", icon: FiUserCheck, selected: false },
  { name: "hair dryer", icon: FiScissors, selected: false },
  { name: "safe", icon: FiLock, selected: false },
];
