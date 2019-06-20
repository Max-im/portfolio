import axios from "axios";
import { GET_PROJECTS, LOAD_PROJECTS } from "../actions/constants";

export const getProjects = () => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });
  setTimeout(() => {
    dispatch({ type: GET_PROJECTS, payload: projects });
    dispatch({ type: LOAD_PROJECTS, payload: false });
  }, 1500);
};

const projects = [
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
];
