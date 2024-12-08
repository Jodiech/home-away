import { IconType } from "react-icons";
export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};
// import {
//   FiCloud,
//   FiTruck,
//   FiZap,
//   FiWind,
//   FiSun,
//   FiCoffee,
//   FiFeather,
//   FiAirplay,
//   FiTrello,
//   FiBox,
//   FiAnchor,
//   FiDroplet,
//   FiMapPin,
//   FiSunrise,
//   FiSunset,
//   FiMusic,
//   FiHeadphones,
//   FiRadio,
//   FiFilm,
//   FiTv,
// } from "react-icons/fi";

// export const amenities: Amenity[] = [
//   { name: "cloud storage", icon: FiCloud, selected: false },
//   { name: "parking", icon: FiTruck, selected: false },
//   { name: "fire pit", icon: FiZap, selected: false },
//   { name: "bbq grill", icon: FiWind, selected: false },
//   { name: "outdoor furniture", icon: FiSun, selected: false },
//   { name: "private bathroom", icon: FiCoffee, selected: false },
//   { name: "hot shower", icon: FiFeather, selected: false },
//   { name: "kitchenette", icon: FiAirplay, selected: false },
//   { name: "heating", icon: FiTrello, selected: false },
//   { name: "air conditioning", icon: FiBox, selected: false },
//   { name: "bed linens", icon: FiAnchor, selected: false },
//   { name: "towels", icon: FiDroplet, selected: false },
//   { name: "picnic table", icon: FiMapPin, selected: false },
//   { name: "hammock", icon: FiSunrise, selected: false },
//   { name: "solar power", icon: FiSunset, selected: false },
//   { name: "water supply", icon: FiMusic, selected: false },
//   { name: "cooking utensils", icon: FiHeadphones, selected: false },
//   { name: "cool box", icon: FiRadio, selected: false },
//   { name: "lanterns", icon: FiFilm, selected: false },
//   { name: "first aid kit", icon: FiTv, selected: false },
// ];
import { RiFridgeLine } from "react-icons/ri";
import { FaCarSide } from "react-icons/fa";
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
