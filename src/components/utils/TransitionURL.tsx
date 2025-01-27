'use client'

import { usePathname, useRouter } from "next/navigation"
import { transitionPageOut } from "./TransitionPage"
import NotFound from "@/app/not-found"

interface Props {
    href: string,
    label: string
}

const TransitionURL = ({href, label}: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (e:any) => {
        try {
            e.preventDefault()
            e.target.disabled = true
            if(pathname != href) {
                transitionPageOut(href, router)
            }

        } catch (error) {
            console.log(error)
            NotFound()
        }
    }

    return (
        <>
            <button onClick={ handleClick } aria-label={`Mostrar detalhes do case ${label}`}>{label}</button>
        </>
    )
}

export default TransitionURL