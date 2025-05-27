const SectionTitle = ({liteHeading}) => {
    return (
        <div className="flex items-center justify-center my-8">
        <div className="flex-grow border-t border-blue-900 border-2 relative top-0.5 mr-2"></div>
        <div className="relative  flex flex-col justify-center items-center">
          <h2 className="text-7xl font-semibold text-slate-200 uppercase">
            {liteHeading}<span className="text-teal-900 text-lg"></span>
          </h2>
        </div>
        <div className="flex-grow border-t border-blue-900 border-2 relative top-0.5 ml-2"></div>
      </div>
    );
};

export default SectionTitle;