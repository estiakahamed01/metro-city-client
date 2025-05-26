const SectionTitle = ({liteHeading,heading}) => {
    return (
        <div class="flex items-center justify-center my-8">
        <div class="flex-grow border-t border-blue-900 border-2 relative top-0.5 mr-2"></div>
        <div className="relative  flex flex-col justify-center items-center">
          <h2 class="text-7xl font-semibold text-slate-200 uppercase">
            {liteHeading}<span class="text-teal-900 text-lg"></span>
          </h2>
          <h2 className="absolute text-4xl left-40 font-bold uppercase top -[50%]">{heading}</h2>
        </div>
        <div class="flex-grow border-t border-blue-900 border-2 relative top-0.5 ml-2"></div>
      </div>
    );
};

export default SectionTitle;