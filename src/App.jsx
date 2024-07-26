import React from "react";
import SwiperComponent from "./components/SwiperComponent";

const slideData = [
  {
    id: "one",
    label: "Domestic",
    title: "Exotic of sunny Hawaii",
    image:
      "https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    location: "Maui, Hawaii",
  },
  {
    id: "two",
    label: "Subtropical",
    title: "Welcome to Eternal Spring",
    image:
      "https://images.unsplash.com/photo-1571900670723-a317a66e3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80",
    location: "Lanzarote, Spain",
  },
  {
    id: "three",
    label: "History",
    title: "Awesome Eiffel Tower",
    image:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    location: "Paris, France",
  },
  {
    id: "four",
    label: "Mayans",
    title: "Comfort meets saftey",
    image:
      "https://images.unsplash.com/photo-1650367310179-e1b5b8e453c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    location: "The Yucatan, Mexico",
  },
  {
    id: "five",
    label: "Native",
    title: "Popular yachting destination",
    image:
      "https://images.unsplash.com/photo-1596521864207-13d46b1a0c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    location: "Whitsunday Islands, Australia",
  },
];

const App = () => {
  return <SwiperComponent slideData={slideData} />;
};

export default App;
