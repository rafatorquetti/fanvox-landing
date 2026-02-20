export type Creator = {
  slug: string;
  name: string;
  category: string;
  description: string;

  // ✅ canonical fields
  avatar: string;
  cover: string;

  rating: number;
  reviews: number;
  interactions: number;
  responseTime: string;
  availability: string;
  verified: boolean;
  trending?: boolean;
};

const buildCreator = (
  slug: string,
  name: string,
  category: string,
  description: string,
  rating = 4.8,
  reviews = 120,
  interactions = 300,
  responseTime = "~6h",
  availability = "Available this week",
  trending = false
): Creator => ({
  slug,
  name,
  category,
  description,
  avatar: `/creators/avatars/${slug}-avatar.jpeg`,
  cover: `/creators/worlds/${slug}-world.jpeg`,
  rating,
  reviews,
  interactions,
  responseTime,
  availability,
  verified: true,
  trending,
});

export const creators: Creator[] = [
  /* ================= SPORTS ================= */
  buildCreator("marcus-johnson","Marcus Johnson","Sports","Former NBA champion mentoring elite performance.",4.9,312,880,"~4h","Available today",true),
  buildCreator("elena-kovacs","Elena Kovacs","Sports","Olympic swimmer teaching mental toughness.",4.8,201,640,"~6h","Limited spots"),
  buildCreator("tyrell-brooks","Tyrell Brooks","Sports","Former NFL receiver coaching speed and separation.",4.9,420,1200,"~3h","Available today",true),
  buildCreator("isabella-rocha","Isabella Rocha","Sports","Fight-performance coach building discipline and grit."),
  buildCreator("chen-hao","Chen Hao","Sports","Table tennis legend teaching precision and focus.",4.9,355,940),
  buildCreator("keisha-morgan","Keisha Morgan","Sports","Sprint coach developing explosive starts.",4.8,176,460),
  buildCreator("javier-ruiz","Javier Ruiz","Sports","Boxing trainer refining timing and power.",4.8,212,520),
  buildCreator("priya-desai","Priya Desai","Sports","Sports psychologist building pressure-proof confidence.",4.9,248,610),
  buildCreator("luca-bianchi","Luca Bianchi","Sports","Pro cycling coach building endurance, tactics, and race-day strategy."),

  /* ================= BUSINESS ================= */
  buildCreator("oliver-grant","Oliver Grant","Business","IPO architect mentoring CEOs and boards.",5,401,1500,"~2h","Limited spots",true),
  buildCreator("darius-cole","Darius Cole","Business","Fortune 500 exec coaching elite teams.",4.9,260,620,"~6h","Limited spots"),
  buildCreator("mei-tan","Mei Tan","Business","Product leader specializing in hyper-growth."),
  buildCreator("gabriel-costa","Gabriel Costa","Business","Operator helping founders scale operations."),

  /* ================= VENTURE ================= */
  buildCreator("helena-fischer","Helena Fischer","Venture","Billion-dollar VC backing category leaders.",5,441,1380,"~2h","Limited spots",true),
  buildCreator("nora-klein","Nora Klein","Venture","Investor focused on fundraising strategy."),

  /* ================= FINANCE ================= */
  buildCreator("ethan-wright","Ethan Wright","Finance","Hedge fund operator decoding market behavior.",4.9,310,860),
  buildCreator("omar-hassan","Omar Hassan","Finance","Macro strategist interpreting global trends."),
  buildCreator("amara-okoye","Amara Okoye","Finance","Macro strategist decoding global markets.",4.8,142,360),

  /* ================= SCIENCE ================= */
  buildCreator("aisha-rahman","Dr. Aisha Rahman","Science","AI ethics leader advising responsible innovation.",4.9,221,610),
  buildCreator("kenji-watanabe","Kenji Watanabe","Science","Robotics professor shaping automation.",4.8,165,350),
  buildCreator("liang-zhou","Liang Zhou","Science","Quantum researcher exploring future computing."),
  buildCreator("sarah-mccall","Sarah McCall","Science","Neuroscientist studying peak cognition."),
  buildCreator("david-stein","David Stein","Science","Biotech founder advancing longevity research."),
  buildCreator("maya-patel","Maya Patel","Science","Medical innovator transforming patient care."),
  buildCreator("lucas-meyer","Lucas Meyer","Science","Climate tech scientist building sustainable futures."),
  buildCreator("mikhail-volkov","Mikhail Volkov","Science","Robotics engineer breaking down AI and real-world systems."),

  /* ================= ARTS ================= */
  buildCreator("alina-petrova","Alina Petrova","Arts","Contemporary artist mentoring creators."),
  buildCreator("mateo-ibarra","Mateo Ibarra","Arts","Award-winning film director teaching cinematic storytelling.",4.9,203,480),
  buildCreator("ana-luiza-santos","Ana Luiza Santos","Arts","Vocal coach helping artists build range, control, and stage confidence."),

  /* ================= ENTERTAINMENT ================= */
  buildCreator("rico-blaze","Rico Blaze","Entertainment","Stand-up comic with two global specials.",4.7,789,2100,"~3h","Available today",true),
  buildCreator("nina-hart","Nina Hart","Entertainment","Hit songwriter crafting unforgettable hooks."),

  /* ================= MEDIA ================= */
  buildCreator("fatima-alsayeed","Fatima Alsayeed","Media","Investigative journalist covering geopolitics and power."),
  buildCreator("theo-harrington","Theo Harrington","Media","Former astronaut sharing mission mindset and calm under pressure."),
  buildCreator("diego-silva","Diego Silva","Media","Film director teaching visual storytelling and pacing."),

  /* ================= LIFESTYLE ================= */
  buildCreator("sienna-blake","Sienna Blake","Lifestyle","Creative director shaping global brands."),
  buildCreator("hana-sato","Hana Sato","Lifestyle","Japanese chef teaching knife skills, umami, and home omakase."),

  /* ================= LEADERSHIP ================= */
  buildCreator("admiral-reed","Admiral Reed","Leadership","Special operations veteran teaching elite leadership."),
  buildCreator("naomi-adebayo","Naomi Adebayo","Leadership","Negotiation specialist shaping billion-dollar deals."),

  /* ================= POLITICS ================= */
  buildCreator("zara-haddad","Zara Haddad","Politics","Policy strategist advising world leaders."),

  /* ================= EDUCATION ================= */
  buildCreator("chloe-laurent","Chloe Laurent","Education","Executive presence coach for high-stakes careers."),
];
