import React, { createContext, useContext } from 'react';

const JobContext = createContext();

const jobPosts = [
  {
    title: "Web",
    budget: "$300",
    priceType: "Fixed-price",
    level: "Intermediate",
    description: "We are looking for a skilled front-end developer to convert our Figma website design into a fully functional HTML website in both desktop and mobile. The site is a scrolling one-page website. The ideal candidate should have experience with responsive design and be able to translate our visual assets into clean, semantic HTML and CSS. Attention to detail is essential to ensure that the final product matches the original design. If you have a strong portfolio demonstrating your capabilities in web development, we would love to hear from you!",
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
