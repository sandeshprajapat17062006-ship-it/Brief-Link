import { useContext, useState } from "react";
import { Copy, Trash2, ExternalLink, MousePointerClick } from "lucide-react";
import api from "../APIs/Api";
import { MyContext } from "../context/MyContext";

const LinksComponents = ({ link }) => {
  const [copied, setCopied] = useState(false);
  const { refreshLink, incrementClick } = useContext(MyContext);
  const shortUrl = `http://localhost:3000/${link.shortCode}`;

  const handleLinkClick = () => {
    incrementClick(link._id);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`${link._id}`);
      refreshLink();
    } catch (error) {
      console.error("Failed to deleate link :", error);
    }
  };

  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-[#E8DCC6] bg-[#FFFCF6] p-5 shadow-[0_3px_14px_-8px_rgba(114,47,55,0.12)] transition-all duration-200 hover:border-[#B7A89A] hover:shadow-[0_8px_24px_-12px_rgba(114,47,55,0.2)] sm:flex-row sm:items-center sm:justify-between">
      {/* Link Details */}
      <div className="min-w-0 flex-1 space-y-4">
        {/* Short URL */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8DCC6]/60 text-[#722F37]">
            <ExternalLink size={19} />
          </div>

          <div className="min-w-0">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="break-all text-base font-semibold tracking-tight text-[#722F37] transition-colors hover:text-[#5E252D] sm:text-lg"
            >
              brief.link/{link.shortCode}
            </a>
            <p className="mt-1 text-xs font-medium text-[#B7A89A]">
              Shortened URL
            </p>
          </div>
        </div>

        {/* Original URL and Click Count */}
        <div className="flex flex-col gap-3 pl-1 sm:flex-row sm:items-center sm:gap-5">
          <a
            href={link.original_URL}
            target="_blank"
            rel="noopener noreferrer"
            title={link.original_URL}
            className="max-w-full truncate text-sm text-[#8D776C] transition-colors hover:text-[#722F37] sm:max-w-md"
          >
            {link.original_URL}
          </a>

          <div className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-[#8D776C]">
            <MousePointerClick size={15} className="text-[#B7A89A]" />
            <span>{link.clicks ?? 0} clicks</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2 border-t border-[#E8DCC6]/70 pt-3 sm:border-t-0 sm:pt-0">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#E8DCC6] bg-[#F7F3EB] px-4 py-2.5 text-sm font-medium text-[#722F37] transition-all duration-200 hover:border-[#B7A89A] hover:bg-[#E8DCC6]/50 active:scale-95 sm:flex-none"
        >
          <Copy size={15} />
          {copied ? "Copied!" : "Copy"}
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#722F37]/20 bg-[#722F37]/5 px-4 py-2.5 text-sm font-medium text-[#722F37] transition-all duration-200 hover:border-[#722F37]/40 hover:bg-[#722F37]/10 active:scale-95 sm:flex-none"
        >
          <Trash2 size={15} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default LinksComponents;
