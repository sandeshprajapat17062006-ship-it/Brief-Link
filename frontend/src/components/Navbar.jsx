
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DCC6]/70 bg-[#F7F3EB]/90 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex h-20 w-full max-w-[1080px] items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="group flex select-none items-center gap-2.5 tracking-tight"
          aria-label="Brief home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#722F37] font-sans text-sm font-semibold tracking-tighter text-[#F7F3EB]">
            b.
          </span>

          <span className="text-lg font-semibold tracking-tight text-[#722F37]">
            brief<span className="text-[#B7A89A]">.</span>
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <span className="rounded-full border border-[#E8DCC6] bg-[#E8DCC6]/50 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-[#B7A89A]">
            v1.0
          </span>

          <button
            type="button"
            // onClick={handleNewLink}
            className="inline-flex items-center gap-2 rounded-lg bg-[#722F37] px-4 py-2 text-sm font-medium text-[#F7F3EB] shadow-sm transition-colors duration-150 hover:bg-[#5E252D] focus:outline-none focus:ring-2 focus:ring-[#722F37]/30"
          >
            <span className="text-lg leading-none">+</span>
            <span>New Link</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
