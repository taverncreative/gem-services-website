export type Review = {
  name: string
  town: string
  rating: number
  text: string
}

export const reviews: Review[] = [
  {
    name: "Sarah L.",
    town: "Maidstone",
    rating: 5,
    text: "Fast response and very professional pest control service. They removed the wasp nest the same day I called."
  },
  {
    name: "David M.",
    town: "Ashford",
    rating: 5,
    text: "Highly recommend GEM Services. Discreet, efficient, and they explained how to prevent the rats from coming back."
  },
  {
    name: "Emma T.",
    town: "Canterbury",
    rating: 5,
    text: "Excellent service. The technician was polite and thorough, completely sorting out our issue with bed bugs."
  }
]
