import { tools } from "../data";

const Toolkit = () => {
  return (
    <section id="toolkit" className="py-16 px-6 bg-f4f4f4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand mb-10 text-left">
          My Toolkit <span>🛠️</span>
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="flex flex-col items-center justify-center p-6 "
            >
              <tool.icon className="text-5xl text-gray-600 mb-4" />

              <p className="text-lg font-medium text-gray-700">{tool.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Toolkit;
