import { ReactNode } from "react";

type JobStatusCardProps = {
    title: string
    count: number
    indicator: string
    icon: ReactNode
}
export default function JobStatusCard({title, count,indicator, icon}: JobStatusCardProps) {
    return (
        <div className="bg-card p-4 rounded-xl flex flex-col gap-y-4 border border-gray-100 shadow-sm">
            <div>
                <p className="truncate text-base font-medium ">{title}</p>
            </div>
            <div className="w-full flex justify-between items-center mt-2">
                <div className="flex items-center gap-3">
                    <p className="text-2xl font-medium">{count}</p>
                    <p className="text-sm font-medium text-green-500">+{indicator}%</p>
                </div>
                <div className=" p-2">
                    {icon}
                </div>
            </div>
        </div>
    )
}