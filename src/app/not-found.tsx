'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
	const pathname = usePathname()
	return (
		<>
			<h1>404 | Página não existe ... {pathname}</h1>
			<Link href="/">Voltar</Link>
		</>
	)
  }