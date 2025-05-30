"use client"

import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const Header = () => {
    const pathname = usePathname()

    return (
        <header className="border-b border-border lg:block hidden">
            <nav>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                width={100}
                                height={100}
                                alt="Logo"
                            />
                        </Link>

                        <SignedIn>
                            <ul className="flex gap-6 items-center">
                                {navLinks.slice(0, 6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route}>
                                            <Link href={link.route} className={`flex items-center gap-2 ${isActive ? "text-purple-500" : "text-gray-700"}`}>
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

                            <ul className="flex gap-6 items-center">
                                {navLinks.slice(6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route}>
                                            <Link href={link.route} className={`flex items-center gap-2 ${isActive ? "text-purple-500" : "text-gray-700"}`}>
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
                                <li>
                                    <UserButton showName />
                                </li>
                            </ul>
                        </SignedIn>

                        <SignedOut>
                            <Button asChild>
                                <Link href="/sign-in">
                                    Login
                                </Link>
                            </Button>
                        </SignedOut>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
