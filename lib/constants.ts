export type EventItem ={
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItem[] = [
  {
    title: "React Conference 2026",
    image: "/images/event1.png",
    slug: "react-conference-2026",
    location: "San Francisco, CA",
    date: "June 15-17, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "Next.js Summit",
    image: "/images/event2.png",
    slug: "nextjs-summit",
    location: "New York, NY",
    date: "July 22-24, 2026",
    time: "8:30 AM - 5:30 PM",
  },
  {
    title: "Web Dev Meetup 2026",
    image: "/images/event3.png",
    slug: "web-dev-meetup",
    location: "Austin, TX",
    date: "May 10, 2026",
    time: "6:00 PM - 8:30 PM",
  },
  {
    title: "JavaScript Hackathon",
    image: "/images/event4.png",
    slug: "javascript-hackathon",
    location: "Seattle, WA",
    date: "August 5-7, 2026",
    time: "9:00 AM - 9:00 PM",
  },
  {
    title: "TypeScript Deep Dive Workshop",
    image: "/images/event5.png",
    slug: "typescript-workshop",
    location: "Boston, MA",
    date: "June 3-4, 2026",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Full Stack Development Conference",
    image: "/images/event6.png",
    slug: "fullstack-dev-conference",
    location: "Chicago, IL",
    date: "September 12-14, 2026",
    time: "8:00 AM - 5:00 PM",
  },
];
