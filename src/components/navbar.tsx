"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
 
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { Ghost, MenuIcon } from "lucide-react";

interface NavbarProps {
    href: string;
    label: string;
    isActive: boolean;
};

export type SidebarProps = Omit<NavbarProps, "isActive">

const poppins = Poppins({
    subsets: ["devanagari"],
    weight: ["700"]
});

const NavbarItem = ({
    href,
    label,
    isActive
}: NavbarProps) => {
    return (
        <Button asChild  variant="outline"
            className={cn(
                "bg-transparent rounded-full hover:bg-transparent border-transparent hover:border-primary text-lg px-3.5",
                isActive && "bg-black text-white hover:bg-black hover:text-white"
            )}
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
};

const navbarItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" }
];

export const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <nav className="h-20 border-b flex justify-between y- font-medium bg-white">
            <Link href="/" className="pl-6 flex items-center">
                <span className={cn(["text-5xl", poppins.className])}>rumroad</span>
            </Link>
            <div className="items-center gap-x-4 hidden lg:flex">
                {navbarItems.map((item)=>(
                    <NavbarItem key={item.label} {...item} isActive={pathname === item.href}/>
                ))}
            </div>
            <div className="hidden lg:flex">
                <Button 
                    variant="secondary"
                    className="border-0 border-l px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
                >
                    <Link href="/login">Login</Link>
                </Button>
                <Button
                    className="border-0 border-l px-12 h-full rounded-none bg-black hover:bg-pink-400 transition-colors text-lg"
                >
                    <Link href="/signup">Start selling</Link>
                </Button>
            </div>
            <div className="flex lg:hidden justify-center items-center">
                <Button 
                    variant="ghost" 
                    className="size-12 border-transparent"
                    onClick={() => setIsSidebarOpen(s => !s)}
                >
                    <MenuIcon className="size-10" />
                </Button>
                <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
            </div>
        </nav>
    );
};