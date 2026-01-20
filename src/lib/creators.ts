export type Creator = {
  name: string;
  slug: string;
  category: string;
  avatar: string;
  cover: string;
  rating: number;
  reviews: number;
  requests: number;
  verified: boolean;

  shortDescription: string; // used in cards
  description: string; // used in profile page
};

export const creators: Creator[] = [
  {
    name: "Marcus Johnson",
    slug: "marcus-johnson",
    category: "Sports",
    avatar: "/images/creators/avatars/marcus.jpg",
    cover: "/images/creators/covers/sports.jpg",
    rating: 4.9,
    reviews: 127,
    requests: 245,
    verified: true,

    shortDescription:
      "Professional basketball player offering training advice and mindset coaching.",

    description:
      "Professional basketball player with years of competitive experience. Marcus helps athletes and fans improve performance, mindset, and consistency through personalized advice and feedback.",
  },

  {
    name: "Luna Martinez",
    slug: "luna-martinez",
    category: "Wellness",
    avatar: "/images/creators/avatars/luna.jpg",
    cover: "/images/creators/covers/wellness.jpg",
    rating: 5.0,
    reviews: 456,
    requests: 890,
    verified: true,

    shortDescription:
      "Certified yoga and meditation instructor focused on balance and clarity.",

    description:
      "Certified yoga and meditation instructor with over a decade of experience. Luna offers guidance on focus, balance, stress relief, and building sustainable wellness routines.",
  },

  {
    name: "Sofia Rodriguez",
    slug: "sofia-rodriguez",
    category: "Entertainment",
    avatar: "/images/creators/avatars/sofia.jpg",
    cover: "/images/creators/covers/entertainment.jpg",
    rating: 5.0,
    reviews: 89,
    requests: 156,
    verified: true,

    shortDescription:
      "Award-winning actress offering career and creative guidance.",

    description:
      "Award-winning actress and filmmaker. Sofia provides thoughtful feedback on creative work, career decisions, and navigating the entertainment industry.",
  },
];
