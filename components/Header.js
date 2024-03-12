import Socials from "./Socials";

const Header = () => {
  return (
    <header className=" bg-primary/80  z-40 w-full flex justify-center  ">
      <div className="container mx-auto mt-4  flex flex-col items-center justify-between  xl:flex-row xl:border xl:rounded-2xl xl:border-transparent xl:bg-white/10 xl:backdrop-blur-sm px-6 ">
        <h1 className="text-4xl xlm:border xlm:rounded-2xl xlm:border-transparent xlm:bg-white/10 xlm:backdrop-blur-sm xlm:p-3 py-1">
          Company <span className="text-accent">Name</span>
        </h1>
        <div>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
