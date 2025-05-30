import Header from '@/components/shared/Header'
import MobileNav from '@/components/shared/MobileNav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            <Header />
            <MobileNav />

            <div className="root-container">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout