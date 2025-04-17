export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
    <>
      <div className="flex justify-center">
        <p className="uppercase tracking-widest font-semibold bg-gradient-to-r from-emerald-500 to-sky-400 text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl mt-6 text-center">
        {title}
      </h2>
      <p className="text-center mt-4 md:text-lg lg:text-xl max-w-md mx-auto text-white/60">
        {description}
      </p>
    </>
    );
};