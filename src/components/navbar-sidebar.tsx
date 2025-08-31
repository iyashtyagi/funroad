import Link from "next/link";

import { SidebarProps } from "./navbar";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { cn } from "@/lib/utils";


interface Props {
    items: SidebarProps[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const  NavbarSidebar = ({
    items,
    open,
    onOpenChange
}: Props) => {
    const onClickHandler = () => onOpenChange(false);
    return (
        <div>
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetContent
                    side="left"
                    className="p-0 transition-none gap-0" 
                >
                    <SheetHeader className="p-4 border-b">
                            <SheetTitle>
                                Menu
                            </SheetTitle>
                    </SheetHeader>
                    <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                        {items.map((item, idx)=>(
                            <Link  
                                onClick={onClickHandler}
                                href={item.href} 
                                key={item.href}
                                className= {cn("flex w-full text-left px-4 pb-4 hover:bg-black hover:text-white text-base font-medium", !idx && "pt-4")}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="border-t">
                            <Link href="/login"
                                onClick={onClickHandler}
                                className= "flex w-full text-left p-4 hover:bg-black hover:text-white text-base font-medium"
                            >
                                Login
                            </Link>
                            <Link
                                onClick={onClickHandler}
                                href="/signup"
                                className= "flex w-full text-left px-4 pb-4 hover:bg-black hover:text-white text-base font-medium"
                            >
                                Start selling
                            </Link>
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    );
}; 