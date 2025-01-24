'use client'

import { usePathname, useRouter } from "next/navigation"
import { transitionPageOut } from "./TransitionPage"

interface Props {
    href: string,
    label: string
}

const TransitionURL = ({href, label}: Props) => {
    
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if(pathname != href) {
            transitionPageOut(href, router)
        }
    }

    return (
        <>
            <button onClick={handleClick}>{label}</button>
        </>
    )
}

export default TransitionURL