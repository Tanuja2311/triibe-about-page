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
    role: "Founder & CEO",
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
    linkedIn: "https://www.linkedin.com/in/aveneel/",
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
    imagePath: "/images/team/japneet-k.jpg",
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
    imagePath: "/images/team/dr-purnima-voria.jpg",
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
  { name: "Lanz Pierce", imagePath: "/images/team/lanz-pierce.jpg", linkedIn: "https://www.linkedin.com/in/lanzpierce/" },
  { name: "Mariela Dabbah", imagePath: "/images/team/mariela-dabbah.jpg", linkedIn: "https://www.linkedin.com/in/marieladabbah/" },
  { name: "Marc Dullaert", imagePath: "/images/team/marc-dullaert.jpg" },
  { name: "Ed Martin", imagePath: "/images/team/ed-martin.jpg" },
  { name: "David Homan", imagePath: "/images/team/david-homan.jpg", linkedIn: "https://www.linkedin.com/in/davidrhoman/" },
  { name: "Adeline Azrack", imagePath: "/images/team/adeline-azrack.jpg", linkedIn: "https://www.linkedin.com/in/adeline-azrack-0853023/" },
  { name: "Sandra Fan", imagePath: "/images/team/sandra-fan.jpg", linkedIn: "https://www.linkedin.com/in/sandrafan/" },
];

export const locations: LocationEntry[] = [
  {
    location: "United States — New York",
    flag: "🇺🇸",
    mdName: "Kyle Matthys",
    mdImagePath: "/images/team/kyle-matthys.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/kylematthys/",
    advisoryBoard: [
      { name: "Helen Kramer", imagePath: "/images/team/helen-kramer.jpg", role: "Chair" },
      { name: "Jonny Imerman", imagePath: "/images/team/jonny-imerman.jpg", linkedIn: "https://www.linkedin.com/in/imermanangels/", role: "Vice Chair" },
      { name: "Jen Libby", imagePath: "/images/team/jen-libby.jpg", linkedIn: "https://www.linkedin.com/in/jen-libby-changemaker/" },
      { name: "Marcia Nelson", imagePath: "/images/team/marcia-nelson.jpg", linkedIn: "https://www.linkedin.com/in/marciasnelson/" },
      { name: "Wendy Diamond", imagePath: "/images/team/wendy-diamond.jpg", linkedIn: "https://www.linkedin.com/in/wendydiamond/" },
      { name: "Yvonne Beri", imagePath: "/images/team/yvonne-beri.jpg", linkedIn: "https://www.linkedin.com/in/yvonneberi/" },
      { name: "Mariam Azarm", imagePath: "/images/team/mariam-azarm.jpg" },
    ],
    advisoryBoardForming: false,
  },
  {
    location: "United Kingdom — London",
    flag: "🇬🇧",
    mdName: "Maryam Rana",
    mdImagePath: "/images/team/maryam-rana.jpg",
    advisoryBoard: [
      { name: "Adam Management CIO", imagePath: "/images/team/adam-management-cio.jpg", role: "Chair" },
      { name: "Stuart Smith", imagePath: "/images/team/stuart-smith.jpg", role: "Vice Chair" },
      { name: "Brian Willetts", imagePath: "/images/team/brian-willetts.jpg" },
      { name: "Sarah Darwin", imagePath: "/images/team/sarah-darwin.jpg" },
      { name: "Anthony Sandoval", imagePath: "/images/team/anthony-sandoval.jpg" },
      { name: "Freddie Toye", imagePath: "/images/team/freddie-toye.jpg" },
    ],
    advisoryBoardForming: false,
  },
  {
    location: "India — Ranchi",
    flag: "🇮🇳",
    mdName: "Satyam Pandey",
    mdImagePath: "/images/team/satyam-pandey.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/satyyampandey/",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Singapore",
    flag: "🇸🇬",
    mdName: "Laya Pothunuri",
    mdImagePath: "/images/team/laya-pothunuri.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
    advisoryBoard: [
      { name: "Paul Brook", imagePath: "/images/team/paul-brook.jpg", role: "Chair" },
      { name: "Wen Chiu", imagePath: "/images/team/wen-chiu.jpg" },
      { name: "Christine Amour-Levan", imagePath: "/images/team/christine-amour-levan.jpg" },
    ],
    advisoryBoardForming: false,
  },
  {
    location: "Sierra Leone",
    flag: "🇸🇱",
    mdName: "Musa Konneh",
    mdImagePath: "/images/team/musa-konneh.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/musa-konneh-079673110/",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Zambia",
    flag: "🇿🇲",
    mdName: "Jonnathan Mtonga",
    mdImagePath: "/images/team/jonnathan-mtonga.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/jonnathanmtonga/",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Nigeria",
    flag: "🇳🇬",
    mdName: "Patience Nnedinso Eze",
    mdImagePath: "/images/team/patience-nnedinso-eze.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/patience-nnedinso-eze-b25b4bb7/",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Canada",
    flag: "🇨🇦",
    mdName: "Ronan Hasan",
    mdImagePath: "/images/team/ronan-hasan.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/ronan-hasan-4b5158241/",
    advisoryBoard: [],
    advisoryBoardForming: true,
  },
  {
    location: "Jamaica",
    flag: "🇯🇲",
    mdName: "Oshane Panton",
    mdImagePath: "/images/team/oshane-panton.jpg",
    mdLinkedIn: "https://www.linkedin.com/in/oshanepanton/",
    advisoryBoard: [],
    advisoryBoardForming: true,
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
