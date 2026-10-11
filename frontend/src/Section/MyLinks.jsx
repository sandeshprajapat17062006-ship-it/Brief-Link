
import React, { useContext, useEffect, useState } from "react";
import LinksComponents from "../components/LinksComponents";
import { Link2, ShieldCheck, Sparkles } from "lucide-react";
import { MyContext } from "../context/MyContext";

const MyLinks = () => {
  let { links } = useContext(MyContext);

  return (
    <section className="mx-auto min-h-[60vh] w-full max-w-5xl px-5 py-14 sm:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8DCC6] bg-[#FFFCF6] px-4 py-1.5 text-xs font-medium text-[#8D776C]">
            <Link2 size={15} className="text-[#722F37]" />
            Your personal link library
          </div>

          <h1 className="text-3xl font-medium tracking-tight text-[#2B1718] sm:text-4xl">
            Your Links<span className="text-[#722F37]">.</span>
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#8D776C]">
            Manage your shortened URLs and track your clicks in one place.
          </p>
        </div>

        <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#E8DCC6] bg-[#FFFCF6] px-5 py-4 shadow-[0_4px_16px_-8px_rgba(114,47,55,0.15)]">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8DCC6]/60 text-[#722F37]">
            <Link2 size={21} />
          </div>

          <div>
            <p className="text-2xl font-semibold leading-none text-[#722F37]">
              {links.length}
            </p>
            <p className="mt-1.5 text-xs font-medium text-[#8D776C]">
              Total links
            </p>
          </div>
        </div>
      </div>

      {/* Status Banner */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-[#E8DCC6] bg-[#FFFCF6] px-4 py-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8DCC6]/60 text-[#722F37]">
          <ShieldCheck size={19} />
        </div>

        <div>
          <p className="text-sm font-medium text-[#2B1718]">
            Auto-saved to browser
          </p>
          <p className="mt-1 text-xs leading-5 text-[#8D776C]">
            Your links are ready whenever you need them
          </p>
        </div>

        <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-[#722F37]" />
      </div>

      {links.length > 0 ? (
        <div className="space-y-4">
          {links.map((elem) => (
            <LinksComponents link={elem} key={elem._id ?? elem.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#B7A89A]/70 bg-[#FFFCF6] px-6 py-20 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8DCC6]/60 text-[#722F37]">
            <Sparkles size={28} />
          </div>

          <h2 className="text-xl font-medium tracking-tight text-[#2B1718] sm:text-2xl">
            No links appear here yet
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-7 text-[#8D776C]">
            You haven't created any shortened links yet. Shorten your first URL
            and it will appear here for easy access and management.
          </p>
        </div>
      )}
    </section>
  );
};

export default MyLinks;
