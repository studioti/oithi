'use client'

import { usePathname, useRouter } from "next/navigation"
import { transitionPageOut } from "./TransitionPage"
import { memo } from "react"

interface Props {
    href: string,
    label: string
}

const TransitionURL = ({href, label}: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (e:any) => {
        try {
            // e.preventDefault()
            e.target.disabled = true
            if(pathname != href) {
                transitionPageOut(href, router)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="transition" onClick={ handleClick } role="button" tabIndex={-1}>{label}</div>
        </>
    )
}

export default memo(TransitionURL)