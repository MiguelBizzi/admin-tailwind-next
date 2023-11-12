import React from "react";
import { Logo } from "./Logo";
import {
    Search,
    BarChart,
    CheckSquare,
    Flag,
    Home,
    SquareStack,
    Users,
    LifeBuoy,
    Cog,
} from "lucide-react";

import NavItem from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";

// import { Container } from './styles';

export const Sidebar: React.FC = () => {
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 shadow-sm">
            <Logo />

            <Input.Root>
                <Input.Prefix>
                    <Search className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control placeholder="Search" />
            </Input.Root>

            <nav className="space-y-0.5">
                <NavItem title="Home" icon={Home} />
                <NavItem title="Dashboard" icon={BarChart} />
                <NavItem title="Projects" icon={SquareStack} />
                <NavItem title="Tasks" icon={CheckSquare} />
                <NavItem title="Reporting" icon={Flag} />
                <NavItem title="Users" icon={Users} />
            </nav>

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Support" icon={LifeBuoy} />
                    <NavItem title="Settings" icon={Cog} />
                </nav>

                <UsedSpaceWidget />
            </div>

            <Profile />
        </aside>
    );
};
