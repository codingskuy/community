import { Loader2, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";

type IframeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  url: string;
  externalUrl?: string;
  openLabel: string;
  loadingLabel: string;
  className?: string;
  iframeClassName?: string;
  allow?: string;
};

export function IframeDialog({
  open,
  onOpenChange,
  title,
  description,
  url,
  externalUrl,
  openLabel,
  loadingLabel,
  className,
  iframeClassName,
  allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
}: IframeDialogProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) setLoading(true);
  }, [open, url]);

  return (
    <Dialog open={open} onClose={onOpenChange} className="relative z-50">
      <div className="fixed inset-0 bg-black/55 backdrop-blur-[2px]" aria-hidden />
      <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4">
        <DialogPanel
          className={`w-[min(1100px,96vw)] h-[min(86vh,860px)] max-w-none p-0 overflow-hidden rounded-lg border border-slate-200 dark:border-white/[0.14] bg-white dark:bg-[#080d19] ${className || ""}`}
        >
          <div className="h-full flex flex-col">
            <div className="px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#080d19]/90 backdrop-blur-sm flex items-start justify-between gap-3">
              <div className="min-w-0 pr-2">
                <DialogTitle className="text-base sm:text-lg text-slate-900 dark:text-white leading-tight line-clamp-2">
                  {title}
                </DialogTitle>
                {description && (
                  <Description className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                    {description}
                  </Description>
                )}
              </div>
              <a
                href={externalUrl || url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-slate-300 dark:border-white/[0.2] px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
              >
                {openLabel}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative flex-1 bg-slate-100 dark:bg-[#050913]">
              {loading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200/80 dark:from-[#060b15] dark:to-[#0d1a2d]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/[0.16] px-4 py-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-white/[0.06]">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {loadingLabel}
                  </span>
                </div>
              )}
              <iframe
                src={url}
                title={title}
                className={`w-full h-full ${iframeClassName || ""}`}
                onLoad={() => setLoading(false)}
                allow={allow}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 rounded-md bg-black/65 hover:bg-black/80 text-white text-xs px-2.5 py-1.5 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
