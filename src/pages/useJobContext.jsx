import React, { createContext, useContext } from 'react';

const JobContext = createContext();

const jobPosts = [
  {
    title: "Web",
    budget: "$300",
    priceType: "Fixed-price",
    level: "Intermediate",
    description: "I need someone to copy the style of a website and I would like it to be rebranded for me. It is already a template. I need this to be done by the end of the week.",
    tags: ["Web Development", "Web Design"],
    paymentVerified: true,
    rating: 4,
    amountSpent: "$27",
    location: "United States",
    proposals: "50+"
  },
  {
    title: "Web Template Clone",
    budget: "$250",
    priceType: "Fixed-price",
    level: "Intermediate",
    description: "Looking to duplicate a website template and rebrand it with my content. Quick turnaround needed.",
    tags: ["HTML", "CSS"],
    paymentVerified: true,
    rating: 5,
    amountSpent: "$35",
    location: "Japan",
    proposals: "30+"
  },
  {
    title: "Website Rebranding",
    budget: "$400",
    priceType: "Fixed-price",
    level: "Intermediate",
    description: "Need a developer to take an existing site and rebrand it using new colors, fonts, and logo. Must be done this week.",
    tags: ["Web Design", "Branding"],
    paymentVerified: true,
    rating: 2,
    amountSpent: "$50",
    location: "AUS",
    proposals: "40+"
  },
  {
    title: "Style Copy Web Project",
    budget: "$300",
    priceType: "Fixed-price",
    level: "Intermediate",
    description: "Need quick help replicating a site style. I’ll provide the template and content.",
    tags: ["Front-end", "UI Design"],
    paymentVerified: false,
    rating: 0,
    amountSpent: "$27",
    location: "Lebanon",
    proposals: "50+"
  },
  {
    title: "Simple Website Rebranding",
    budget: "$320",
    priceType: "Fixed-price",
    level: "Intermediate",
    description: "Take an existing template and update branding elements. Deadline in 5 days.",
    tags: ["Web Development", "Rebranding"],
    paymentVerified: false,
    rating: 0,
    amountSpent: "$27",
    location: "AUS",
    proposals: "60+"
  }
];

export const JobProvider = ({ children }) => {
  return (
    <JobContext.Provider value={jobPosts}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
