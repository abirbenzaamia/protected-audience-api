import { GiKnifeFork } from "react-icons/gi";
import { Button } from "..";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="box h-[82vh] flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-16">
      <div className="flex flex-col items-center md:items-start justify-center basis-1/2 gap-4">
      <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
      Savor. Inspire. Repeat. 
        </div>
        <h2 className="font-bold text-3xl md:text-5xl text-center md:text-start">
          Welcome to <span className="text-primary">Kool</span>
        </h2>
        <p className="text-gray-600 text-center md:text-start">
        A haven for food enthusiasts to dive into delicious recipes, 
        explore culinary tips, and share the joy of cooking.
         Discover, create, and connect with others who savor every flavor and celebrate every meal.
        </p>
        <Link to={"/recipe"}>
          <Button
            content={"Discover Recipes"}
            customCss={
              "mt-4 md:mt-8 md:py-3 md:px-9 md:text-lg max-w-max rounded-full"
            }
            icon={<GiKnifeFork />}
          />
        </Link>
      </div>
      <div className="basis-1/2 bg-hero bg-no-repeat bg-cover bg-center rounded-xl"></div>
    </section>
  );
};

export default Hero;