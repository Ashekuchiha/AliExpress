import { Button } from "@mui/material";
import Banner from "./component/banner/Banner";
import Main from "./component/cover/Main";
import ProductCard from "./component/moreToLove/ProductCard";
import ShopByCategory from "./component/shopByCategory/ShopByCategory";
import TodaysDeals from "./component/todaysDeal/TodaysDeals";
import Bot from "./component/nav/bot";

export default function Home() {
  return (
    <div>
      <Bot/>
      <Main/>
      <h1 className="text-black font-extrabold text-2xl text-center pt-2 pb-4">Todays deals</h1>
      <TodaysDeals/>
      <Banner/>
      <h1 className="text-black font-extrabold text-2xl text-center pt-2 pb-4">Shop by category</h1>
      <ShopByCategory/>
      <h1 className="text-black font-extrabold text-2xl text-center pt-2 pb-4">More to love</h1>
      <div className="flex flex-col justify-center  h-full bg-gray-100 gap-4 mx-[70px]">
        <ProductCard
          imageSrc="/images/lena.jpg"
          title="Soft Liquid Silicone Case"
          price="118.34"
          reviews={5}
          sold="5000"
        />
        <ProductCard
          imageSrc="/images/lena.jpg"
          title="Soft Liquid Silicone Case"
          price="118.34"
          reviews={5}
          sold="5000"
        />
        <Button className="w-28 mx-[50%]" sx={{
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
        backgroundColor: 'darkpurple',
        },
        }}>View More</Button>
      </div>
    </div>
  );
}
