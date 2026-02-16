import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("portfolio");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative flex flex-col justify-center items-center h-screen w-full px-6">
      <div className="container max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold text-brand mb-4">
            Hello! I'm Christian{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            A passionate front-end developer from Stavanger, graduated from
            Noroff School of Technology and Digital Media, dedicated to learning
            and creating responsive, user-friendly web designs.
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/images/headshot.webp"
            alt="Christian coding"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div
        onClick={scrollToProjects}
        className="absolute bottom-8 animate-bounce text-brand text-3xl cursor-pointer hover:text-red-400 transition-colors"
      >
        <FaArrowDown />
      </div>
    </header>
  );
};

export default Hero;
