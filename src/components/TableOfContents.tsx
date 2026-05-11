import { Users2, UserCheck, Star, MapPin, LayoutGrid, Award } from "lucide-react";

const sections = [
  { id: "csuite", label: "C-Suite & Board", Icon: Users2 },
  { id: "associate", label: "Associate Board", Icon: UserCheck },
  { id: "legacy", label: "Legacy Board", Icon: Star },
  { id: "locations", label: "Locations", Icon: MapPin },
  { id: "departments", label: "Departments", Icon: LayoutGrid },
  { id: "honorary", label: "Honorary Members", Icon: Award },
];

export default function TableOfContents() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-y border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex flex-wrap gap-2">
          {sections.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-600 hover:border-[#1A6B3C] hover:text-[#1A6B3C] hover:bg-[#EAF3DE] transition-colors cursor-pointer"
            >
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
