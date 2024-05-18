const ThemeSwitcher = () => {
  return (
    <nav className="flex justify-between items-center bg-lightbg py-4 shadow-lg w-full">
      <h1 className="mx-8">Where in the world ?</h1>
      <div className="flex mx-8 items-center gap-2">
        <img
          className="h-4"
          src="/assets/images/moon-outline.svg"
          alt="moon-img"
        />
        <button>light</button>
      </div>
    </nav>
  );
};

export default ThemeSwitcher;
