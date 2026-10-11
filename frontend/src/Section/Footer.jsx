import React from "react";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t border-[#E8DCC6]/80 bg-[#F7F3EB]/95 backdrop-blur-md transition-all duration-200">
      <div className="mx-auto flex max-w-[1080px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#722F37] font-semibold tracking-tight text-[#F7F3EB]">
            b.
          </div>

          <span className="text-lg font-semibold tracking-tight text-[#722F37]">
            brief<span className="text-[#B7A89A]">.link</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs font-normal tracking-wide text-[#B7A89A]">
          © {new Date().getFullYear()} brief.link. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex items-center gap-5 text-xs font-medium text-[#8D776C]">
          <a
            href="#"
            className="transition-colors duration-200 hover:text-[#722F37]"
          >
            Privacy
          </a>

          <a
            href="#"
            className="transition-colors duration-200 hover:text-[#722F37]"
          >
            Terms
          </a>

          <a
            href="mailto:support@brief.link"
            className="transition-colors duration-200 hover:text-[#722F37]"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;