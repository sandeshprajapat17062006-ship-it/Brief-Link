

const Firstsection = () => {
  return (
    <section className="mb-10 w-full max-w-2xl text-center md:mb-14">
      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8DCC6] bg-[#E8DCC6]/40 px-4 py-1.5 text-xs font-medium text-[#8D776C]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#722F37]"></span>
        Editorial, permanent &amp; uncluttered short links
      </div>

      {/* Main Heading */}
      <h1 className="mb-3 text-[46px] font-medium leading-tight tracking-[-1.4px] text-[#241516] md:text-[52px] md:leading-[1.2]">
        Simplicity in{" "}
        <span className="font-serif font-normal italic text-[#722F37]">
          every
        </span>{" "}
        link.
      </h1>

      {/* Subtitle */}
      <p className="mx-auto max-w-lg text-sm font-normal leading-[1.8] text-[#8D776C] md:text-base">
        Transform long, cluttered destinations into clean, warm, and confident
        URLs ready to share anywhere.
      </p>
    </section>
  );
};

export default Firstsection;
