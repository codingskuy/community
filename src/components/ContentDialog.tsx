import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { ExternalLink, MessageCircle, BookOpenText } from "lucide-react";

type ContentDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  content: string;
  externalUrl?: string;
  openLabel: string;
  variant?: "reading" | "discussion";
  meta?: string[];
  prompt?: string;
  ctaLabel?: string;
};

export function ContentDialog({
  open,
  onOpenChange,
  title,
  description,
  content,
  externalUrl,
  openLabel,
  variant = "reading",
  meta = [],
  prompt,
  ctaLabel,
}: ContentDialogProps) {
  const isReading = variant === "reading";

  const paragraphs = content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog open={open} onClose={onOpenChange} className="relative z-50">
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/55 backdrop-blur-[2px]" aria-hidden />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 translate-y-3 scale-[0.98]"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-2 scale-[0.98]"
          >
            <DialogPanel className="w-[min(980px,96vw)] h-[min(84vh,800px)] max-w-none overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.14] bg-white dark:bg-[#080d19] shadow-[0_30px_90px_-35px_rgba(0,0,0,0.75)]">
              <div className="h-full flex flex-col">
                <div
                  className={`px-4 sm:px-6 py-4 border-b border-slate-200 dark:border-white/[0.1] backdrop-blur-sm ${
                    isReading
                      ? "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-[#0b1324] dark:to-[#0a1d2d]"
                      : "bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-[#0b1c1d] dark:to-[#0d231d]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-1.5 mb-2 text-[11px] uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">
                        {isReading ? <BookOpenText className="w-3.5 h-3.5" /> : <MessageCircle className="w-3.5 h-3.5" />}
                        {isReading ? "Reading Mode" : "Discussion Mode"}
                      </div>
                      <DialogTitle className="text-base sm:text-xl text-slate-900 dark:text-white leading-tight line-clamp-2">
                        {title}
                      </DialogTitle>
                      {description && (
                        <Description className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                          {description}
                        </Description>
                      )}
                      {meta.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {meta.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[11px] px-2 py-1 rounded-full border ${
                                isReading
                                  ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/25"
                                  : "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/25"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {/* {externalUrl && (
                        <a
                          href={externalUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-slate-300 dark:border-white/[0.2] px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors"
                        >
                          {openLabel}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )} */}
                      <button
                        type="button"
                        onClick={() => onOpenChange(false)}
                        className="rounded-md bg-black/65 hover:bg-black/80 text-white text-xs px-2.5 py-1.5 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 bg-white dark:bg-[#080d19]">
                  <div
                    className={`mx-auto max-w-3xl rounded-2xl border p-5 sm:p-6 ${
                      isReading
                        ? "border-blue-100 dark:border-blue-500/20 bg-gradient-to-b from-white to-blue-50/40 dark:from-[#0b1324] dark:to-[#091522]"
                        : "border-teal-100 dark:border-teal-500/20 bg-gradient-to-b from-white to-emerald-50/40 dark:from-[#0b1718] dark:to-[#0b1d19]"
                    }`}
                  >
                    <div className="space-y-4 text-[15px] leading-7 text-slate-700 dark:text-slate-200">
                      {(paragraphs.length > 0 ? paragraphs : [content || "-"]).map((paragraph, index) => (
                        <p key={index} className="whitespace-pre-wrap">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  {prompt && (
                    <div
                      className={`mx-auto max-w-3xl mt-4 rounded-2xl border p-4 text-sm ${
                        isReading
                          ? "border-blue-200/70 dark:border-blue-500/30 bg-blue-50/70 dark:bg-blue-500/10 text-blue-900 dark:text-blue-100"
                          : "border-teal-200/70 dark:border-teal-500/30 bg-teal-50/70 dark:bg-teal-500/10 text-teal-900 dark:text-teal-100"
                      }`}
                    >
                      {prompt}
                    </div>
                  )}
                </div>
                {externalUrl && (
                  <div className="px-4 sm:px-6 py-4 border-t border-slate-200 dark:border-white/[0.1] bg-white/95 dark:bg-[#080d19]/90">
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm transition-colors ${
                        isReading
                          ? "bg-blue-600 hover:bg-blue-500 text-white"
                          : "bg-teal-600 hover:bg-teal-500 text-white"
                      }`}
                    >
                      {ctaLabel || openLabel}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
