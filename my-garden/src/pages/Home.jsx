import { useLoaderData } from "react-router";
import Hero from "../component/Hero";
import Review from "../component/Review";
import Success from "../component/Success";
import FeaturedTip from "../component/FeaturedTip";


const Home = () => {
  
    return (
        <div>
          <Hero/>
          <FeaturedTip/>
          <Success/>
          <Review/>
        </div>
    );
};

export default Home;