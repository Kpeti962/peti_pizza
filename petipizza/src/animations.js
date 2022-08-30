export const pageAnim = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      duration: 0.5,
    },
  },
};
export const successAnim = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 0.95,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
    },
  },
};
