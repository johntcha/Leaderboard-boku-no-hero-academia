import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import { Character } from "./type";

let mockApiCharacterData: Character[] = [
  {
    name: "Izuku Midoriya",
    imgSrc: "/images/midoriya.jpg",
    points: 0,
    rank: 1,
    translateY: "",
  },
  {
    name: "Katsuki Bakugo",
    imgSrc: "/images/katsuki.jpg",
    points: 0,
    rank: 2,
    translateY: "",
  },
  {
    name: "Todoroki Shoto",
    imgSrc: "/images/todoroki.jpg",
    points: 0,
    rank: 3,
    translateY: "",
  },
  {
    name: "Shinso Hitoshi",
    imgSrc: "/images/shinso.jpg",
    points: 0,
    rank: 4,
    translateY: "",
  },
  {
    name: "Uraraka Ochaco",
    imgSrc: "/images/uraraka.jpg",
    points: 0,
    rank: 5,
    translateY: "",
  },
  {
    name: "Yaoyorozu Momo",
    imgSrc: "/images/yaoyorozu.jpg",
    points: 0,
    rank: 6,
    translateY: "",
  },
  {
    name: "Fumikage Tokoyami",
    imgSrc: "/images/tokoyami.jpg",
    points: 0,
    rank: 7,
    translateY: "",
  },
  {
    name: "Iida tenya",
    imgSrc: "/images/iida.jpg",
    points: 0,
    rank: 8,
    translateY: "",
  },
];

const Leaderboard = () => {
  const [characterData, setCharacterData] =
    useState<Character[]>(mockApiCharacterData);
  const [intervalValue, setIntervalValue] = useState<number>(2000);
  // const [characterCardHeight, setCharacterCardHeight] = useState<number>(0);
  // const characterCardRef = useRef<any>(null);

  // useLayoutEffect(() => {
  //   if (characterCardRef.current && !characterCardHeight) {
  //     setCharacterCardHeight(characterCardRef.current.clientHeight);
  //   }
  // }, []);

  useEffect(() => {
    // Recalculating every intervalValue (1000 by default) mss
    const interval = setInterval(() => {
      setCharacterData((prevValue) => {
        let mockApiCharacterDataUpdated = [...prevValue];
        const randomSelectedPosition = Math.floor(
          Math.random() * mockApiCharacterDataUpdated.length
        );
        mockApiCharacterDataUpdated[randomSelectedPosition].points +=
          Math.floor(Math.random() * 100);
        const sortedCharacterArray = [...mockApiCharacterDataUpdated].sort(
          (a, b) => b.points - a.points
        );
        for (const [
          index,
          character,
        ] of mockApiCharacterDataUpdated.entries()) {
          const currentRank =
            sortedCharacterArray.findIndex(
              (sortedCharacter) => sortedCharacter.name === character.name
            ) + 1;
          if (index + 1 > currentRank) {
            // characterCardHeight (64) + 16px for the gap between the cards * the difference of rank difference
            character.translateY = `translateY(-${
              80 * Math.abs(index + 1 - currentRank)
            }px)`;
          } else if (index + 1 < currentRank) {
            character.translateY = `translateY(${
              80 * Math.abs(index + 1 - currentRank)
            }px)`;
          } else {
            character.translateY = "";
          }
          character.rank = currentRank;
        }
        return mockApiCharacterDataUpdated;
      });
    }, intervalValue);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [intervalValue]);

  return (
    <div className="flex flex-col items-center bg-cool-background bg-cover bg-center bg-no-repeat min-h-screen p-8 gap-8">
      <p className="text-6xl text-white">Leaderboard</p>
      <div className="flex flex-col items-center bg-violet-900 w-6/12 max-w-screen-sm rounded p-8 gap-4 shadow-2xl">
        {characterData.map((character) => {
          return (
            <PlayerCard
              key={`${character.name}`}
              character={character}
              //only ref the first card to avoid unnecessary re-renders and state updates
              // ref={index === 0 ? characterCardRef : null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
