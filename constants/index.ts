import { SlGraph } from "react-icons/sl";
import { FaMicrochip, FaPlusSquare, } from "react-icons/fa";
import { GoIssueOpened } from "react-icons/go";
import { BsDatabaseFillUp } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
interface NavigationItem {
    name: string;
    href: string;
    icon: React.ElementType;
    current: boolean;
}
export const navigation: NavigationItem[] = [
    {
        name: "IOT Metrics Analysis",
        href: "#",
        icon: SlGraph,
        current: true,
    },
    { name: "IOT Live Data", href: "#", icon: FaMicrochip, current: false },
    { name: "Issues", href: "#", icon: GoIssueOpened, current: false },
    {
        name: "Sales/Presales Data",
        href: "#",
        icon: FaDatabase,
        current: false,
    },
    {
        name: "Upload Sales Data",
        href: "#",
        icon: BsDatabaseFillUp,
        current: false,
    },
    { name: "Create a New Site", href: "#", icon: FaPlusSquare, current: false },
];