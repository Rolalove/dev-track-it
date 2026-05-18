import { BellDot } from "lucide-react";
import { Button } from "../ui/button";

export default function TopCard({ title, subtext }: { title: string, subtext: string }) {
    return (
        <div className="grid grid-cols-2 gap-5 justify-between bg-card rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="">
            <h1 className="text-2xl font-semibold text-card-foreground">{title}</h1>
            <p className="text-gray-600">{subtext}</p>

            
        </div>
        <div className="flex flex-row justify-between items-center">
            <input type="search" name="search" id="search" placeholder="Search" className="bg-background"/>
            <div className="flex flex-row gap-4 items-center">
                
            <BellDot size={30} color="gray" />
            <div className="rounded-full w-12 h-12 bg-gray-100"></div>
            </div>

        </div>
        
        </div>
    )
}