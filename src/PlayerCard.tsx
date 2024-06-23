import { forwardRef } from "react";
import { Character } from "./type";

interface PlayerCardProps {
  character: Character;
}

const PlayerCard = forwardRef(({ character }: PlayerCardProps, ref: any) => {
  const { name, imgSrc, points } = character;
  return (
    <div
      ref={ref}
      className={`bg-violet-600 rounded-md text-2xl w-full shadow-md flex gap-8 px-4 py-2 items-center text-white transform transition-all duration-500`}
      style={{ transform: character.translateY }}
    >
      <p>{character.rank}</p>
      <div className="flex gap-4 items-center">
        <img src={imgSrc} alt={name} className="h-12 w-12 rounded-full" />
        <p>{name}</p>
      </div>
      <div className="flex ml-auto gap-2">
        <p>{points}</p>
        <p>point{points > 1 ? "s" : ""}</p>
      </div>
    </div>
  );
});

export default PlayerCard;
