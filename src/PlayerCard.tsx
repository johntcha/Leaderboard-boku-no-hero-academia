import { Character } from "./type";

interface PlayerCardProps {
  character: Character;
  rank: number;
}

const PlayerCard = ({ character, rank }: PlayerCardProps) => {
  const { name, imgSrc, points } = character;
  return (
    <div className="bg-violet-600 rounded-md text-2xl w-full shadow-md flex gap-8 px-4 py-2 items-center text-white">
      <p>{rank}</p>
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
};

export default PlayerCard;
