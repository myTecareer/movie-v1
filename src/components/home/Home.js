import React from "react";
import { Hero } from "../hero/Hero";

const Home = ({ movies }) => {
  return <Hero movies={movies} />;
};

export default Home;
/*
The code imports the React library, which is necessary for writing React components.

It also imports the Hero component from the "../hero/Hero" file.

The Home function is defined as a React functional component that takes a single parameter called movies.

Inside the Home component, it returns a JSX structure, which represents the UI of the component.

The JSX structure consists of a single component, <Hero>, which is rendered using the self-closing tag syntax (<Hero />). 
The Hero component is passed the movies prop, which is received from the parent component.

Finally, the Home component is exported as the default export using export default Home;. 
This allows the component to be imported and used in other parts of the application.

In summary, this code defines a Home component that renders a Hero component and passes the movies prop to it. 
The Home component serves as a wrapper or a parent component for the Hero component, 
which handles the rendering and display of content related to movies.
*/
