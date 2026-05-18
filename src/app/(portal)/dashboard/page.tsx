import JobStatusCard from "@/features/dashboard/components/JobStatusCard";
import QuoteCard from "@/features/dashboard/components/QuoteCard";
import { DASHBOARD_JOB_STATUS_CARDS } from "@/features/dashboard/data";


export default function DashboardPage() {
    // In the future, this will be calculated from your real database/applications
    const currentState = 'NEW_APPLICATION';

    return (
        <div className="flex flex-col xl:flex-row gap-3">
            
            {/* Left Column */}
            <div className="flex flex-col gap-3 w-full xl:w-1/3">
                {/* QuoteCard (Taller) */}
                <QuoteCard state={currentState} />
                
                {/* The Empty Div (flex-1 makes it stretch to the bottom) */}
                <div className="flex-1 w-full bg-card rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-center text-muted-foreground">
                    Empty Div Component
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 w-full xl:w-2/3">
                {/* Right Column Top: Job Status Cards (Shorter) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                   {DASHBOARD_JOB_STATUS_CARDS.map((card) => (
                        <JobStatusCard key={card.title} title={card.title} count={card.count} indicator={card.indicator} icon={card.icon} />
                    ))}
                </div>

                {/* Right Column Bottom: Two Bottom Boxes (flex-1 makes them stretch to the bottom) */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="h-full bg-card rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-center text-muted-foreground">
                        Bottom Box 1
                    </div>
                    <div className="h-full bg-card rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-center text-muted-foreground">
                        Bottom Box 2
                    </div>
                </div>
            </div>

        </div>
    )
}