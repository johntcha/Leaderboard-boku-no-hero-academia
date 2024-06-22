const PlayerCard = () => {
  return (
    <div className="bg-violet-600 rounded-md text-2xl w-full shadow-md flex gap-8 px-4 py-2 items-center text-white">
      <p>1</p>
      <div className="flex gap-4 items-center">
        <img
          src="/images/midoriya.jpg"
          alt="midoriya"
          className="h-12 w-12 rounded-full"
        />
        <p>name</p>
      </div>
      <div className="flex ml-auto gap-2">
        <p>123</p>
        <p>points</p>
      </div>
    </div>
  );
};

export default PlayerCard;
