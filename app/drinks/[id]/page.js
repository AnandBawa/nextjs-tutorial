import Link from "next/link";
import Image from "next/image";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleDrinkPage = async ({ params }) => {
  const response = await fetch(`${url}${params.id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch a drink");
  }

  const data = await response.json();
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        alt={title}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinkPage;
