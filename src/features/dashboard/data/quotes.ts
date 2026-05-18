export type UserJourneyState = 'EMPTY' | 'NEW_APPLICATION' | 'INTERVIEWING' | 'REJECTED' | 'OFFER';

export const JOURNEY_QUOTES: Record<UserJourneyState, { text: string; subtext: string }> = {
  EMPTY: {
    text: "It all starts with one",
    subtext: "Add your first application to begin your journey"
  },
  NEW_APPLICATION: {
    text: "You've taken the first step",
    subtext: "Keep applying and sharpening your skills"
  },
  INTERVIEWING: {
    text: "You're close",
    subtext: "Use mock interviews to boost your confidence"
  },
  REJECTED: {
    text: "Each no brings you closer.",
    subtext: "Bounce back stronger, you've got this."
  },
  OFFER: {
    text: "You did it, now finalize.",
    subtext: "Review the offer and plan your next steps."
  }
};
