import { Hero, HomeCategories } from "../../components";
import { useGetRecipesQuery } from "../../features/recipe/recipeApiSlice";
import { useGetBlogsQuery } from "../../features/blog/blogApiSlice";


const Home = () => {
  const recipes = useGetRecipesQuery();
  const blogs = useGetBlogsQuery();
  return (
    <>
      <Hero />
      <HomeCategories
        title={"recipe"}
        data={recipes?.data}
        isLoading={recipes?.isLoading}
      />
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4972165070846072"
     crossorigin="anonymous"></script>
      <!-- home-ad -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-4972165070846072"
           data-ad-slot="2083794390"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script> */}
       <HomeCategories
        title={"blog"}
        data={blogs?.data}
        isLoading={blogs?.isLoading}
      />

    </>
  );
};

export default Home;
