import { DO_SMTH } from "../actions/constants";

const initialState = {
  projects: [
    {
      title: "one",
      description: "description one",
      picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV`,
      id: 1
    },
    {
      title: "two",
      description: "description two",
      picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV`,
      id: 2
    },
    {
      title: "three",
      description: "description three",
      picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV`,
      id: 3
    },
    {
      title: "four",
      description: "description four",
      picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV`,
      id: 4
    },
    {
      title: "five",
      description: "description five",
      picture: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtwZ8EnpOYoQKm1t-lDY7oaR6-yqycubmXLObfM5V21nDPSbV`,
      id: 5
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
