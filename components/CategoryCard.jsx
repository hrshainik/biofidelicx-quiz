const CategoryCard = ({ title }) => {
  return (
    <a
      href="/blog"
      className="m-5 relative flex items-end h-48 transition bg-white-500 border-4 border-gray-900 group hover:bg-aquamarine-500"
    >
      <span className="absolute inset-0 -translate-x-2 ring-gray-900 -translate-y-2 bg-white-500 ring-4 border-gray-900 -z-10"></span>
      <span className="absolute inset-0 -translate-x-4 ring-gray-900 -translate-y-4 bg-white-500 ring-4 border-gray-900 -z-20"></span>

      <div className="p-8 lg:group-hover:opacity-0 lg:group-hover:absolute">
        <p className="text-lg font-bold">{title}</p>

        <p className="mt-1 font-mono text-xs">7 Quizzes</p>
      </div>

      <div className="absolute p-8 opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
        <p className="text-lg font-bold">{title}</p>

        <p className="mt-1 text-xs">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo officiis
          impedit deleniti odio
        </p>
      </div>
    </a>
  );
};

export default CategoryCard;
