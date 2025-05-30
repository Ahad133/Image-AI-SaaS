"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
    const pathname = usePathname()

    return (
        <header className="border-b border-border lg:hidden px-4 py-2">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/assets/images/logo-text.svg"
                        alt="logo"
                        width={180}
                        height={28}
                    />
                </Link>

                <nav className="flex gap-2 items-center">
                    <SignedIn>
                        <UserButton />

                        <Sheet>
                            <SheetTrigger>
                                <Image
                                    src="/assets/icons/menu.svg"
                                    alt="menu"
                                    width={32}
                                    height={32}
                                    className="cursor-pointer"
                                />
                            </SheetTrigger>
                            <SheetContent className="sm:w-64">
                                <SheetDescription>
                                    <>
                                        <Image
                                            src="/assets/images/logo-text.svg"
                                            alt="logo"
                                            width={152}
                                            height={23}
                                            className="pl-3 pt-2.5"
                                        />
                                        <ul className="pt-5">
                                            {navLinks.map((link) => {
                                                const isActive = link.route === pathname
                                                return (
                                                    <li key={link.route}>
                                                        <Link href={link.route} className={`flex items-center gap-2 p-4 whitespace-nowrap ${isActive && "text-purple-500"}`}>
                                                            <Image
                                                                src={link.icon}
                                                                alt={link.label}
                                                                width={24}
                                                                height={24}
                                                            />
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                </SheetDescription>
                            </SheetContent>
                        </Sheet>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild>
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </header>
    )
}

export default MobileNav
