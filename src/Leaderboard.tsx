import PlayerCard from "./PlayerCard";

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center bg-cool-background bg-cover bg-center bg-no-repeat min-h-screen p-8 gap-8">
      <p className="text-6xl text-white">Leaderboard</p>
      <div className="flex flex-col items-center bg-violet-900 w-6/12 max-w-screen-sm rounded p-8 gap-4 shadow-2xl">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  );
};

export default Leaderboard;
