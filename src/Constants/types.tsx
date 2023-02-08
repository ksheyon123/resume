export type ExperienceType = {
  name: string;
  location: string;
  duration: {
    from: number;
    to?: number;
  },
  position: string;
  works: { [key: number]: string };
  achievement: string;
}