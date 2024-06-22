import PlayerCard from "./PlayerCard";
import { Character } from "./type";

let mockApiCharacterData: Character[] = [
  {
    name: "Izuku Midoriya",
    imgSrc: "/images/midoriya.jpg",
    points: 0,
  },
  {
    name: "Katsuki Bakugo",
    imgSrc: "/images/katsuki.jpg",
    points: 0,
  },
  {
    name: "Todoroki Shoto",
    imgSrc: "/images/todoroki.jpg",
    points: 0,
  },
  {
    name: "Shinso Hitoshi",
    imgSrc: "/images/shinso.jpg",
    points: 0,
  },
  {
    name: "Uraraka Ochaco",
    imgSrc: "/images/uraraka.jpg",
    points: 0,
  },
  {
    name: "Yaoyorozu Momo",
    imgSrc: "/images/yaoyorozu.jpg",
    points: 0,
  },
  {
    name: "Fumikage Tokoyami",
    imgSrc: "/images/tokoyami.jpg",
    points: 0,
  },
  {
    name: "Iida tenya",
    imgSrc: "/images/iida.jpg",
    points: 0,
  },
];

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center bg-cool-background bg-cover bg-center bg-no-repeat min-h-screen p-8 gap-8">
      <p className="text-6xl text-white">Leaderboard</p>
      <div className="flex flex-col items-center bg-violet-900 w-6/12 max-w-screen-sm rounded p-8 gap-4 shadow-2xl">
        {mockApiCharacterData.map((character, index) => {
          return (
            <PlayerCard
              key={`${index}-${character}`}
              character={character}
              rank={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
