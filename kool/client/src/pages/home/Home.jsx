import { Hero, HomeCategories } from "../../components";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";


const Home = () => {
  const recipes = useGetRecipesQuery();

  return (
    <>
      <Hero />
      <HomeCategories
        title={"recipe"}
        data={recipes?.data}
        isLoading={recipes?.isLoading}
      />
      
    </>
  );
};

export default Home;
