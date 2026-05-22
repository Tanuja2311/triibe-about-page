import type { LucideIcon } from "lucide-react";

export interface Person {
  name: string;
  role?: string;
  title?: string;
  imagePath: string;
  linkedIn?: string;
}

export interface DepartmentMember {
  name: string;
  imagePath: string;
  linkedIn?: string;
  isHead?: boolean;
}

export interface Department {
  name: string;
  Icon: LucideIcon;
  members: DepartmentMember[];
}

export interface LocationAdvisoryMember {
  name: string;
  imagePath: string;
  linkedIn?: string;
  role?: string;
  title?: string;
}

export interface LocationEntry {
  location: string;
  flag: string;
  mdName?: string;
  mdImagePath?: string;
  mdLinkedIn?: string;
  advisoryBoard: LocationAdvisoryMember[];
  advisoryBoardForming: boolean;
  locationPath?: string;
}

export interface HonoraryMember {
  name: string;
  imagePath: string;
  linkedIn?: string;
}
