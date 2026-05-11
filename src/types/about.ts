import type { LucideIcon } from "lucide-react";

export interface Person {
  name: string;
  role?: string;
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

export interface LocationEntry {
  name: string;
  location: string;
  locationPath: string;
  imagePath: string;
  linkedIn?: string;
}

export interface HonoraryMember {
  name: string;
  imagePath: string;
  linkedIn?: string;
}
