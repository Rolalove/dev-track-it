import { CalendarDays, CalendarIcon, FileIcon,Mail, XIcon } from "lucide-react";
import { ReactNode } from "react";

export type JobStatusCardProps = {
    title: string;
    count: number;
    indicator: string;
    icon: ReactNode;
};

const DASHBOARD_JOB_STATUS_CARDS: JobStatusCardProps[] = [
    {
        title: "Total Applications",
        count: 10,
        indicator: "3",
        icon: <FileIcon />,
    },
    {
        title: "Interview",
        count: 5,
        indicator: "2",
        icon: <CalendarDays />,
    },
    {
        title: "Offers",
        count: 3,
        indicator: "10",
        icon:  <Mail />,
    },
    {
        title: "Active Applications",
        count: 2,
        indicator: "20",
        icon: <XIcon />,
    },
];

export default DASHBOARD_JOB_STATUS_CARDS