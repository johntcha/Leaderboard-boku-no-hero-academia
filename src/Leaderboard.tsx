import { useEffect, useRef, useState } from "react";
import PlayerCard from "./PlayerCard";
import { Character } from "./type";
import InputNumberValue from "./InputNumberValue";

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
  const [minPointValue, setMinPointValue] = useState<number>(0);
  const [maxPointValue, setMaxPointValue] = useState<number>(100);
  const characterCardRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Recalculating every intervalValue (1000 by default) mss
    const updateCharacterData = () => {
      const height = characterCardRef.current?.clientHeight;
      if (height) {
        setCharacterData((prevValue) => {
          let mockApiCharacterDataUpdated = [...prevValue];
          const randomSelectedPosition = Math.floor(
            Math.random() * mockApiCharacterDataUpdated.length
          );
          mockApiCharacterDataUpdated[randomSelectedPosition].points +=
            Math.floor(
              Math.random() * (maxPointValue - minPointValue) + minPointValue
            );
          const sortedCharacterArray = [...mockApiCharacterDataUpdated].sort(
            (a, b) => b.points - a.points
          );
          // update rank and translateY properties without changing the order of the original array
          for (const [
            index,
            character,
          ] of mockApiCharacterDataUpdated.entries()) {
            const currentRank =
              sortedCharacterArray.findIndex(
                (sortedCharacter) => sortedCharacter.name === character.name
              ) + 1;
            const rankDifference = Math.abs(index + 1 - currentRank);
            if (index + 1 > currentRank) {
              // characterCardHeight + 16px for the gap between the cards * rank difference
              character.translateY = `translateY(-${
                (height + 16) * rankDifference
              }px)`;
            } else if (index + 1 < currentRank) {
              character.translateY = `translateY(${
                (height + 16) * rankDifference
              }px)`;
            } else {
              character.translateY = "";
            }
            character.rank = currentRank;
          }
          return mockApiCharacterDataUpdated;
        });
      }
    };
    const interval = setInterval(() => {
      updateCharacterData();
    }, intervalValue);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [intervalValue, maxPointValue, minPointValue]);

  return (
    <div className="flex flex-col items-center bg-cool-background bg-cover bg-center bg-no-repeat min-h-screen p-8 gap-8">
      <p className="text-5xl text-white">Leaderboard</p>
      <div className="flex flex-col items-center bg-violet-900 w-6/12 max-w-screen-sm rounded p-8 gap-4 shadow-2xl">
        {characterData.map((character, index) => {
          return (
            <PlayerCard
              key={`${character.name}`}
              character={character}
              //only ref the first card to avoid unnecessary re-renders and state updates
              ref={index === 0 ? characterCardRef : null}
            />
          );
        })}
      </div>
      <div className="flex gap-6">
        <InputNumberValue
          label="Min points"
          value={minPointValue}
          onValueChange={setMinPointValue}
        />
        <InputNumberValue
          label="Max points"
          value={maxPointValue}
          onValueChange={setMaxPointValue}
        />
        <InputNumberValue
          label="Interval time (ms)"
          value={intervalValue}
          onValueChange={setIntervalValue}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
