import { JOURNEY_QUOTES, UserJourneyState } from "../data/quotes";
import Image from "next/image";
export default function QuoteCard({ state = 'EMPTY' }: { state?: UserJourneyState }) {
  const quote = JOURNEY_QUOTES[state];

  return (
    <div className="relative overflow-hidden p-4 rounded-xl bg-card border flex flex-col min-h-[160px]">
        {/* Illustrations Section (Top) */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-start pointer-events-none">
            {/* Flow Decoration (Top Left) */}
            <Image src="/assets/illustrations/flow.svg" alt="Flow Decoration" width={200} height={80} />
            
            {/* Sitting Character (Top Right) */}
            <div className="pr-6 pt-3">
                <Image src="/assets/illustrations/Sitting.svg" alt="Sitting Character" width={60} height={60} />
            </div>
        </div>
        
        {/* Text Content (Bottom) */}
        <div className="relative z-10 pt-12 mt-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">"{quote.text}"</h3>
            <p className="text-sm font-medium text-gray-500">{quote.subtext}</p>
        </div>
    </div>
  )
}
