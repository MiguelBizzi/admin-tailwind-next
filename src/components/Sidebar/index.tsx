"use client";

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
    Menu,
} from "lucide-react";

import NavItem from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../Button";

export const Sidebar = () => {
    return (
        <Collapsible.Root className="flex flex-col gap-6 border-b overflow-y-scroll border-zinc-200 shadow-sm fixed left-0 top-0 right-0 data-[state=open]:bottom-0 lg:data-[state=closed]:bottom-0 z-20 p-4 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
            <div className="flex items-center justify-between">
                <Logo />
                <Collapsible.Trigger asChild className="lg:hidden">
                    <Button variant="ghost">
                        <Menu className="w-6 h-6" />
                    </Button>
                </Collapsible.Trigger>
            </div>

            <Collapsible.Content
                forceMount
                className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
            >
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
            </Collapsible.Content>
        </Collapsible.Root>
    );
};
