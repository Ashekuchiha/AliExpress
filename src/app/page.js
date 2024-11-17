import Main from "./component/cover/Main";
import TodaysDeals from "./component/todaysDeal/TodaysDeals";

export default function Home() {
  return (
    <div>
      <Main/>
      <h1 className="text-black font-extrabold text-2xl text-center pt-2 pb-4">Today's deals</h1>
      <TodaysDeals/>
    </div>
  );
}
