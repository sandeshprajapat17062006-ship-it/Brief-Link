
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import api from "../APIs/Api";
import { MyContext } from "../context/MyContext";

const InputSection = () => {
  let { refreshLink } = useContext(MyContext);

  const [longUrl, setLongUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [showCustomAlias, setShowCustomAlias] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  

  const FormSubmit = async (data) => {
    console.log(data);

    if (!longUrl.trim()) return;
    try {
      const response = await api.post("/register", {
        url: data.longUrl.trim(),
        customAlias:customAlias.trim()
      });

      reset()
      setLongUrl("")
      setCustomAlias("")



      refreshLink();
    } catch (error) {
      console.error(
        "Failed to shorten URL:",
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message,
      );
    }

    
  };

  return (
    <section className="mb-16 w-full max-w-2xl">
      <div className="rounded-2xl border border-[#E8DCC6] bg-[#FFFCF6] p-3 shadow-[0_8px_30px_-12px_rgba(114,47,55,0.12)] transition-all duration-200 md:p-4">
        <form
          onSubmit={handleSubmit(FormSubmit)}
          className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
        >
          <div className="flex min-h-14 flex-grow items-center rounded-xl px-3 sm:pr-2">
            <span className="mr-3 text-2xl text-[#B7A89A]">↗</span>

            <input
              {...register("longUrl", { required: true })}
              type="url"
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Paste a long link here (e.g. https://verylongurl.com/...)"
              required
              className="w-full border-0 bg-transparent p-0 text-base font-normal tracking-[-0.2px] text-[#2B1718] placeholder:text-[#B7A89A] focus:outline-none focus:ring-0"
            />
          </div>

          <button
            type="submit"
            className="flex min-h-12 cursor-pointer shrink-0 items-center justify-center gap-2 rounded-xl bg-[#722F37] px-7 py-3 text-sm font-semibold tracking-wide text-[#F7F3EB] shadow-sm transition-all duration-200 hover:bg-[#5E252D] focus:outline-none focus:ring-2 focus:ring-[#722F37]/30 focus:ring-offset-2"
          >
            <span>Shorten</span>
            <span className="text-lg">→</span>
          </button>
        </form>

        <div className="mt-3 flex flex-col justify-between gap-3 border-t border-[#E8DCC6]/70 px-3 pb-1 pt-3 text-sm sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setShowCustomAlias((prev) => !prev)}
            aria-expanded={showCustomAlias}
            className="inline-flex items-center gap-2 text-left text-xs font-medium text-[#8D776C] transition-colors hover:text-[#722F37]"
          >
            <span>⚙</span>
            <span className="cursor-pointer">
              {showCustomAlias ? "Hide customization" : "Customize back-half"}
            </span>
          </button>

          <span className="text-xs font-normal text-[#B7A89A]">
            Press Enter to shorten
          </span>
        </div>

        {showCustomAlias && (
          <div className="px-3 pb-2 pt-3">
            <div className="flex min-h-11 items-center rounded-xl border border-[#E8DCC6] bg-[#F7F3EB] px-3 py-2 font-mono text-sm transition-colors focus-within:border-[#B7A89A] focus-within:ring-2 focus-within:ring-[#722F37]/10">
              <span className="shrink-0 text-[#B7A89A]">
                brief.link/
              </span>

              <input
                type="text"
                {...register("customAlias")}
                value={customAlias}
                onChange={(e) => setCustomAlias(e.target.value)}
                placeholder="custom-slug"
                className="ml-1 w-full border-0 bg-transparent p-0 text-sm text-[#722F37] placeholder:text-[#B7A89A] focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InputSection;
