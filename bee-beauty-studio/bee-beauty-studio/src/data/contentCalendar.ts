// Bee & Beauty — content calendar mock data for the Ordinary Serum launch window.

import type { ContentPillarId } from "./contentPillars";

export type CalendarEntry = {
  day: string;
  date: string;
  pillar: ContentPillarId;
  platform: "Instagram" | "Facebook" | "Both";
  time: string;
  note: string;
};

export const contentCalendar: { week: string; entries: CalendarEntry[] }[] = [
  {
    week: "Week 1 — Launch Setup",
    entries: [
      {
        day: "Mon",
        date: "Sep 1",
        pillar: "education",
        platform: "Both",
        time: "9:00 AM",
        note: "Routine-order lesson: where a serum belongs",
      },
      {
        day: "Tue",
        date: "Sep 2",
        pillar: "ingredient",
        platform: "Instagram",
        time: "12:00 PM",
        note: "Propolis spotlight carousel",
      },
      {
        day: "Wed",
        date: "Sep 3",
        pillar: "product",
        platform: "Both",
        time: "9:00 AM",
        note: "Teaser: 'One drop changes everything'",
      },
      {
        day: "Thu",
        date: "Sep 4",
        pillar: "community",
        platform: "Instagram",
        time: "5:00 PM",
        note: "Behind-the-hive lab story series",
      },
      {
        day: "Fri",
        date: "Sep 5",
        pillar: "trust",
        platform: "Both",
        time: "11:00 AM",
        note: "Sourcing transparency carousel",
      },
      {
        day: "Sat",
        date: "Sep 6",
        pillar: "product",
        platform: "Instagram",
        time: "10:00 AM",
        note: "One Drop Ritual reel",
      },
      {
        day: "Sun",
        date: "Sep 7",
        pillar: "community",
        platform: "Facebook",
        time: "4:00 PM",
        note: "Ask the hive: community question",
      },
    ],
  },
  {
    week: "Week 2 — Serum Launch",
    entries: [
      {
        day: "Mon",
        date: "Sep 8",
        pillar: "product",
        platform: "Both",
        time: "9:00 AM",
        note: "Launch day: full ingredient carousel",
      },
      {
        day: "Tue",
        date: "Sep 9",
        pillar: "ingredient",
        platform: "Instagram",
        time: "12:00 PM",
        note: "Royal jelly reel — 'why not just honey'",
      },
      {
        day: "Wed",
        date: "Sep 10",
        pillar: "trust",
        platform: "Both",
        time: "11:00 AM",
        note: "96% radiance study quote card",
      },
      {
        day: "Thu",
        date: "Sep 11",
        pillar: "education",
        platform: "Instagram",
        time: "9:00 AM",
        note: "Myth: natural = gentle",
      },
      {
        day: "Fri",
        date: "Sep 12",
        pillar: "product",
        platform: "Both",
        time: "3:00 PM",
        note: "14-day glow timeline static post",
      },
      {
        day: "Sat",
        date: "Sep 13",
        pillar: "community",
        platform: "Instagram",
        time: "10:00 AM",
        note: "First customer UGC repost",
      },
      {
        day: "Sun",
        date: "Sep 14",
        pillar: "trust",
        platform: "Facebook",
        time: "4:00 PM",
        note: "Verified review roundup",
      },
    ],
  },
];
