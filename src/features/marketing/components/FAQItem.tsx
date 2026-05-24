import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) => {
  return (
    <div className="flex flex-col rounded-xl gap-4.5  p-4.5 border-marketing-border border bg-marketing-card">
      <button onClick={onToggle} className="flex justify-between">
        <h3 className="font-semibold text-start text-xl text-marketing-muted">
          {question}
        </h3>
        <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      {isOpen && (
        <p className="text-xl font-medium text-marketing-muted">{answer}</p>
      )}
    </div>
  );
};
