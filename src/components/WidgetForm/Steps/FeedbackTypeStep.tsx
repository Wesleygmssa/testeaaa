import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButtob";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType | null) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          console.log(key, value);
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center border-2 border-transparent hover:border-x-brand-500 focus:border-x-brand-500 focus:outline-none"
              type="button"
              onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
            >
              <img src={value.Image.src} alt={value.Image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
