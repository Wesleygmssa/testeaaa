import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Report a bug",
    Image: {
      src: "https://image.flaticon.com/icons/svg/1051/1051209.svg",
      alt: "bug",
    },
  },
  IDEA: {
    title: "Suggest an idea",
    Image: {
      src: "https://image.flaticon.com/icons/svg/1051/1051209.svg",
      alt: "idea",
    },
  },
  OTHER: {
    title: "Other",
    Image: {
      src: "https://image.flaticon.com/icons/svg/1051/1051209.svg",
      alt: "other",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-ld w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}
      <footer className="text-xs text-neutral-400">
        Feito com <span className="text-red-500">❤</span> pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rockeatseat.com.br"
        >
          Rockeatseat
        </a>
      </footer>
    </div>
  );
}
