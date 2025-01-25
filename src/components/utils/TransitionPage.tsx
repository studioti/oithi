import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const transitionPageIn = () => {

    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')
    const box3 = document.getElementById('box-3')
    const box4 = document.getElementById('box-4')

    if(box1 && box2 && box3 && box4) {

        const eIn = gsap.timeline()

        eIn.set([box1, box2, box3, box4], {
            yPercent: 0,
            stagger: .2
        }).to([box1, box2, box3, box4], {
            yPercent: 100,
            stagger: .2
        })
    }
}

export const transitionPageOut = (href: string, router: AppRouterInstance) => {

    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')
    const box3 = document.getElementById('box-3')
    const box4 = document.getElementById('box-4')

    if(box1 && box2 && box3 && box4) {

        const eOut = gsap.timeline()

        eOut.set([box1, box2, box3, box4], {
            yPercent: -100,
            stagger: .2
        }).to([box1, box2, box3, box4], {
            yPercent: 0,
            stagger: .2,
            onComplete: () => {
                router.push(href)
            }
        })
    }
}