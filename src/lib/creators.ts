export type Creator = {
  slug: string;
  name: string;
  category: string;
  bio: string;
  services: string[];
  rating: number;
  reviews: number;
  interactions: number;
};

export const creators: Creator[] = [
  {
    slug: "sofia-rodriguez",
    name: "Sofia Rodriguez",
    category: "Entertainment",
    bio: "Award-winning actress and filmmaker.",
    services: ["Personalized videos", "1:1 calls", "Shoutouts"],
    rating: 5,
    reviews: 89,
    interactions: 156,
  },
  {
    slug: "luna-martinez",
    name: "Luna Martinez",
    category: "Wellness",
    bio: "Yoga and meditation instructor.",
    services: ["1:1 sessions", "Personalized videos"],
    rating: 5,
    reviews: 456,
    interactions: 890,
  },
  {
    slug: "marcus-johnson",
    name: "Marcus Johnson",
    category: "Sports",
    bio: "Professional athlete and motivator.",
    services: ["Coaching calls", "Shoutouts"],
    rating: 4.9,
    reviews: 127,
    interactions: 245,
  },
];

export function getCreatorBySlug(slug: string): Creator | undefined {
  return creators.find((creator) => creator.slug === slug);
}
