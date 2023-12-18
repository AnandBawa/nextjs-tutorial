import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const DrinksPage = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch Drinks");
  }

  const data = await response.json();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default DrinksPage;
