const Loading = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-zinc-400 dark:bg-zinc-700">
      <img
        src="/pokeball.png"
        alt="Pokeball"
        className="size-[250px] animate-spin"
      />
    </div>
  );
};

export default Loading;
