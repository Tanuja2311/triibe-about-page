import {
  Megaphone,
  CalendarDays,
  Share2,
  Globe,
  FlaskConical,
  Handshake,
  Monitor,
  Palette,
} from "lucide-react";
import type { Person, Department, LocationEntry, HonoraryMember } from "../types/about";

export const csuite: Person[] = [
  {
    name: "Kyle Matthys",
    role: "Executive Director / CEO",
    imagePath: "/images/team/kyle-matthys.jpg",
    linkedIn: "https://www.linkedin.com/in/kylematthys/",
  },
  {
    name: "Nawaf Alshaikhmubarak",
    role: "Chief Operating Officer",
    imagePath: "/images/team/nawaf-alshaikhmubarak.jpg",
    linkedIn: "https://www.linkedin.com/in/nawaf-mub/",
  },
  {
    name: "James Hetherington",
    role: "Board Chair",
    imagePath: "/images/team/james-hetherington.jpg",
    linkedIn: "https://www.linkedin.com/in/james-hetherington-590b981b8/",
  },
];

export const associateBoard: Person[] = [
  {
    name: "Maryam Rana",
    role: "Associate Board Chair",
    imagePath: "/images/team/maryam-rana.jpg",
  },
  {
    name: "Laya Pothunuri",
    role: "Associate Board Vice Chair",
    imagePath: "/images/team/laya-pothunuri.jpg",
    linkedIn: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
  },
  {
    name: "Jade Kashemsant",
    role: "Shadow Treasurer",
    imagePath: "/images/team/jade-kashemsant.jpg",
    linkedIn: "https://www.linkedin.com/in/jadekashemsant/",
  },
  {
    name: "Dominic Yap",
    role: "Shadow Secretary",
    imagePath: "/images/team/dominic-yap.jpg",
    linkedIn: "https://www.linkedin.com/in/dominic-yap-62b546266/",
  },
  {
    name: "Christian Elam",
    role: "Member",
    imagePath: "/images/team/christian-elam.jpg",
  },
  {
    name: "Rida Karim",
    role: "Member",
    imagePath: "/images/team/rida-karim.jpg",
  },
  {
    name: "George Shi",
    role: "Member",
    imagePath: "/images/team/george-shi.jpg",
    linkedIn: "https://www.linkedin.com/in/george-shi-4a9b18190/",
  },
  {
    name: "Frederick Tsao",
    role: "Member",
    imagePath: "/images/team/frederick-tsao.jpg",
    linkedIn: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
  },
  {
    name: "Aria Mariam",
    role: "Member",
    imagePath: "/images/team/aria-mariam.jpg",
  },
  {
    name: "Maximilian Goetz",
    role: "Member",
    imagePath: "/images/team/maximilian-goetz.jpg",
  },
  {
    name: "Aveneel Waadhwa",
    role: "Member",
    imagePath: "/images/team/aveneel-waadhwa.jpg",
  },
];

// Filled members first, In Conversation below (can be sliced to remove later)
export const legacyBoard: Person[] = [
  {
    name: "Stefan Avivson",
    role: "Legacy Board Chair",
    imagePath: "/images/team/stefan-avivson.jpg",
    linkedIn: "https://www.linkedin.com/in/avivson/",
  },
  {
    name: "Gregg Meyer",
    imagePath: "/images/team/gregg-meyer.jpg",
    linkedIn: "https://www.linkedin.com/in/gregg-meyer/",
  },
  {
    name: "Japneet Kaur",
    imagePath: "/images/team/japneet-kaur.jpg",
    linkedIn: "https://www.linkedin.com/in/japneet-k-34816426/",
  },
  {
    name: "Geoffrey Sargeant",
    imagePath: "/images/team/geoffrey-sargeant.jpg",
    linkedIn: "https://www.linkedin.com/in/geoffsargeant/",
  },
  {
    name: "Flaviu Simihaian",
    imagePath: "/images/team/flaviu-simihaian.jpg",
    linkedIn: "https://www.linkedin.com/in/flaviusimihaian/",
  },
  {
    name: "Lara Stein",
    imagePath: "/images/team/lara-stein.jpg",
    linkedIn: "https://www.linkedin.com/in/citizenstein/",
  },
  {
    name: "Stacey Lauren",
    imagePath: "/images/team/stacey-lauren.jpg",
    linkedIn: "https://www.linkedin.com/in/staceylauren/",
  },
  {
    name: "Dr. Purnima Voria",
    imagePath: "/images/team/purnima-voria.jpg",
    linkedIn: "https://www.linkedin.com/in/purnimavoria/",
  },
  {
    name: "Mark Sadovnick",
    imagePath: "/images/team/mark-sadovnick.jpg",
  },
  // In Conversation — remove when finalised
  {
    name: "Chelsea Toler",
    role: "Legacy Board Vice Chair",
    imagePath: "/images/team/chelsea-toler.jpg",
    linkedIn: "https://www.linkedin.com/in/catoler92/",
  },
  {
    name: "Laurence Kalinsky",
    imagePath: "/images/team/laurence-kalinsky.jpg",
  },
  { name: "Lanz Pierce", imagePath: "/images/team/lanz-pierce.jpg" },
  { name: "Mariela Dabbah", imagePath: "/images/team/mariela-dabbah.jpg" },
  { name: "Marc Dullaert", imagePath: "/images/team/marc-dullaert.jpg" },
  { name: "Ed Martin", imagePath: "/images/team/ed-martin.jpg" },
  { name: "David Homan", imagePath: "/images/team/david-homan.jpg" },
  { name: "Adeline Azrack", imagePath: "/images/team/adeline-azrack.jpg" },
  { name: "Sandra Fan", imagePath: "/images/team/sandra-fan.jpg" },
];

// locationPath is omitted until triibe.org/locations pages are live
export const locations: LocationEntry[] = [
  {
    name: "Kyle Matthys",
    location: "United States",
    imagePath: "/images/team/kyle-matthys.jpg",
    linkedIn: "https://www.linkedin.com/in/kylematthys/",
  },
  {
    name: "Maryam Rana",
    location: "United Kingdom (London)",
    imagePath: "/images/team/maryam-rana.jpg",
  },
  {
    name: "Satyam Pandey",
    location: "India (Ranchi)",
    imagePath: "/images/team/satyam-pandey.jpg",
    linkedIn: "https://www.linkedin.com/in/satyyampandey/",
  },
  {
    name: "Laya Pothunuri",
    location: "Singapore",
    imagePath: "/images/team/laya-pothunuri.jpg",
    linkedIn: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
  },
  {
    name: "Musa Konneh",
    location: "Sierra Leone",
    imagePath: "/images/team/musa-konneh.jpg",
    linkedIn: "https://www.linkedin.com/in/musa-konneh-079673110/",
  },
  {
    name: "Jonnathan Mtonga",
    location: "Zambia",
    imagePath: "/images/team/jonnathan-mtonga.jpg",
    linkedIn: "https://www.linkedin.com/in/jonnathanmtonga/",
  },
  {
    name: "Patience Nnedinso Eze",
    location: "Nigeria",
    imagePath: "/images/team/patience-nnedinso-eze.jpg",
    linkedIn: "https://www.linkedin.com/in/patience-nnedinso-eze-b25b4bb7/",
  },
  {
    name: "Ronan Hasan",
    location: "Canada",
    imagePath: "/images/team/ronan-hasan.jpg",
    linkedIn: "https://www.linkedin.com/in/ronan-hasan-4b5158241/",
  },
  {
    name: "Oshane Panton",
    location: "Jamaica",
    imagePath: "/images/team/oshane-panton.jpg",
    linkedIn: "https://www.linkedin.com/in/oshanepanton/",
  },
];

export const departments: Department[] = [
  {
    name: "Media",
    Icon: Megaphone,
    members: [
      {
        name: "Ritikesh Kunwar",
        imagePath: "/images/team/ritikesh-kunwar.jpg",
        linkedIn: "https://www.linkedin.com/in/ritikesh-kunwar-141779326/",
        isHead: true,
      },
      {
        name: "Grace Sengul",
        imagePath: "/images/team/grace-sengul.jpg",
        linkedIn: "https://www.linkedin.com/in/grace-sengul-a74a00329/",
      },
    ],
  },
  {
    name: "Events",
    Icon: CalendarDays,
    members: [
      {
        name: "Parker Johnson",
        imagePath: "/images/team/parker-johnson.jpg",
        linkedIn: "https://www.linkedin.com/in/zachary-parker-johnson/",
        isHead: true,
      },
      {
        name: "Everett Mader",
        imagePath: "/images/team/everett-mader.jpg",
      },
      {
        name: "Evelyn Sar",
        imagePath: "/images/team/evelyn-sar.jpg",
        linkedIn: "https://www.linkedin.com/in/evelynsar/",
      },
    ],
  },
  {
    name: "Outreach",
    Icon: Share2,
    members: [
      {
        name: "Grace Sengul",
        imagePath: "/images/team/grace-sengul.jpg",
        linkedIn: "https://www.linkedin.com/in/grace-sengul-a74a00329/",
        isHead: true,
      },
      {
        name: "Pranay Mishra",
        imagePath: "/images/team/pranay-mishra.jpg",
        linkedIn: "https://www.linkedin.com/in/pranay--mishra/",
      },
      {
        name: "Ryan Miller",
        imagePath: "/images/team/ryan-miller.jpg",
        linkedIn: "https://www.linkedin.com/in/ryanmillerhq/",
      },
    ],
  },
  {
    name: "Global Relations",
    Icon: Globe,
    members: [
      {
        name: "Quinn Hoeven",
        imagePath: "/images/team/quinn-hoeven.jpg",
        linkedIn: "https://www.linkedin.com/in/quinnvanderhoeven/",
        isHead: true,
      },
      {
        name: "Shradha Adhikari",
        imagePath: "/images/team/shradha-adhikari.jpg",
        linkedIn: "https://www.linkedin.com/in/shradhadhikari/",
      },
      {
        name: "Jade Kashemsant",
        imagePath: "/images/team/jade-kashemsant.jpg",
        linkedIn: "https://www.linkedin.com/in/jadekashemsant/",
      },
      {
        name: "Satyam Pandey",
        imagePath: "/images/team/satyam-pandey.jpg",
        linkedIn: "https://www.linkedin.com/in/satyyampandey/",
      },
      {
        name: "Rida Karim",
        imagePath: "/images/team/rida-karim.jpg",
      },
    ],
  },
  {
    name: "Research",
    Icon: FlaskConical,
    members: [
      {
        name: "Nancy Thadhani",
        imagePath: "/images/team/nancy-thadhani.jpg",
        linkedIn: "https://www.linkedin.com/in/nancy-thadhani-48501730a/",
        isHead: true,
      },
      {
        name: "Taylor Anderson",
        imagePath: "/images/team/taylor-anderson.jpg",
        linkedIn: "https://www.linkedin.com/in/taylor-anderson-74a577396/",
      },
    ],
  },
  {
    name: "Partnerships",
    Icon: Handshake,
    members: [
      {
        name: "Laya Pothunuri",
        imagePath: "/images/team/laya-pothunuri.jpg",
        linkedIn: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
        isHead: true,
      },
      {
        name: "Maryam Rana",
        imagePath: "/images/team/maryam-rana.jpg",
      },
      {
        name: "Imane Abdel Jelil",
        imagePath: "/images/team/imane-abdel-jelil.jpg",
        linkedIn: "https://www.linkedin.com/in/imane-abdel-jelil/",
      },
    ],
  },
  {
    name: "Technology",
    Icon: Monitor,
    members: [
      {
        name: "Pranay Mishra",
        imagePath: "/images/team/pranay-mishra.jpg",
        linkedIn: "https://www.linkedin.com/in/pranay--mishra/",
        isHead: true,
      },
      {
        name: "Aditya Patnaik",
        imagePath: "/images/team/aditya-patnaik.jpg",
      },
      {
        name: "Riya Bose",
        imagePath: "/images/team/riya-bose.jpg",
      },
    ],
  },
  {
    name: "Design",
    Icon: Palette,
    members: [
      {
        name: "Tanuja Bodas",
        imagePath: "/images/team/tanuja-bodas.jpg",
        linkedIn: "https://www.linkedin.com/in/tanujabodas23/",
        isHead: true,
      },
      {
        name: "Angela Goldberg",
        imagePath: "/images/team/angela-goldberg.jpg",
        linkedIn: "https://www.linkedin.com/in/angela-goldberg/",
      },
      {
        name: "Fionnuala Eastwood",
        imagePath: "/images/team/fionnuala-eastwood.jpg",
        linkedIn: "https://www.linkedin.com/in/fionnuala-eastwood/",
      },
    ],
  },
];

export const honoraryMembers: HonoraryMember[] = [
  {
    name: "Chirag Nijjer",
    imagePath: "/images/team/chirag-nijjer.jpg",
    linkedIn: "https://www.linkedin.com/in/chiragspeaks/",
  },
  {
    name: "Victoria Gothard",
    imagePath: "/images/team/victoria-gothard.jpg",
    linkedIn: "https://www.linkedin.com/in/victoria-gothard/",
  },
  {
    name: "Rowana Miller",
    imagePath: "/images/team/rowana-miller.jpg",
    linkedIn: "https://www.linkedin.com/in/rowana-miller-7506bb179/",
  },
  {
    name: "Anthony Valencia",
    imagePath: "/images/team/anthony-valencia.jpg",
    linkedIn: "https://www.linkedin.com/in/anthony-valencia-1a1a8695/",
  },
  {
    name: "Roman Pikalenko",
    imagePath: "/images/team/roman-pikalenko.jpg",
    linkedIn: "https://www.linkedin.com/in/roman-pikalenko/",
  },
  {
    name: "Davi Santos",
    imagePath: "/images/team/davi-santos.jpg",
    linkedIn: "https://www.instagram.com/davi_santos/",
  },
  {
    name: "Jaden Cappe",
    imagePath: "/images/team/jaden-cappe.jpg",
    linkedIn: "https://www.linkedin.com/in/jaden-cappe/",
  },
  {
    name: "Maximilian Lehmann",
    imagePath: "/images/team/maximilian-lehmann.jpg",
    linkedIn: "https://www.linkedin.com/in/maximilian-lehmann/",
  },
  {
    name: "George Shi",
    imagePath: "/images/team/george-shi.jpg",
    linkedIn: "https://www.linkedin.com/in/george-shi-4a9b18190/",
  },
  {
    name: "Frederick Tsao",
    imagePath: "/images/team/frederick-tsao.jpg",
    linkedIn: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
  },
  {
    name: "Dominic Yap",
    imagePath: "/images/team/dominic-yap.jpg",
    linkedIn: "https://www.linkedin.com/in/dominic-yap-62b546266/",
  },
  {
    name: "Dylan Hanson",
    imagePath: "/images/team/dylan-hanson.jpg",
    linkedIn: "https://www.linkedin.com/in/~dylan/",
  },
  {
    name: "Keshav Sani",
    imagePath: "/images/team/keshav-sani.jpg",
    linkedIn: "https://www.linkedin.com/in/keshav-sani-853550204/",
  },
  {
    name: "Aaradhya Thakur",
    imagePath: "/images/team/aaradhya-thakur.jpg",
    linkedIn: "https://www.linkedin.com/in/aaradhya-thakur-674b1b1a4/",
  },
  {
    name: "Stephanie Pacheco",
    imagePath: "/images/team/stephanie-pacheco.jpg",
    linkedIn: "https://www.linkedin.com/in/stephanie-pacheco-086225201/",
  },
  {
    name: "Tahnoon Murtza",
    imagePath: "/images/team/tahnoon-murtza.jpg",
    linkedIn: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
  },
  {
    name: "Sina Albanese",
    imagePath: "/images/team/sina-albanese.jpg",
    linkedIn: "https://www.linkedin.com/in/sina-albanese/",
  },
  {
    name: "Himal Pandey",
    imagePath: "/images/team/himal-pandey.jpg",
    linkedIn: "https://www.linkedin.com/in/himalpandey/",
  },
  {
    name: "Will Reynolds",
    imagePath: "/images/team/will-reynolds.jpg",
    linkedIn: "https://www.linkedin.com/in/wreynoldsnz/",
  },
  {
    name: "Jacob Shulman",
    imagePath: "/images/team/jacob-shulman.jpg",
    linkedIn: "https://www.linkedin.com/in/jacob-shulman-85a44720b/",
  },
  {
    name: "Luis Utrilla",
    imagePath: "/images/team/luis-utrilla.jpg",
    linkedIn: "https://www.linkedin.com/in/luis-utri-athlete-zero/",
  },
  {
    name: "Alex Garfin",
    imagePath: "/images/team/alex-garfin.jpg",
    linkedIn: "https://www.instagram.com/alexgarfin/",
  },
  {
    name: "Mahir Laul",
    imagePath: "/images/team/mahir-laul.jpg",
    linkedIn: "https://www.linkedin.com/in/mahirlaul/",
  },
  {
    name: "Zachary Anglemyer",
    imagePath: "/images/team/zachary-anglemyer.jpg",
  },
];
