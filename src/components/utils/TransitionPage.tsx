import NotFound from "@/app/not-found"
import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const transitionPageIn = (href:string) => {

    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')
    const box3 = document.getElementById('box-3')
    const box4 = document.getElementById('box-4')

    try {
        if(box1 && box2 && box3 && box4) {

            if(href && href == '/') {
                box1.innerHTML = '<span>2</span>'
                box2.innerHTML = '<span>0</span>'
                box3.innerHTML = '<span>2</span>'
                box4.innerHTML = '<span>5</span>'
            }
    
            const eIn = gsap.timeline()
    
            eIn
            .set([box1, box2, box3, box4], {
                yPercent: 0,
                stagger: .2
            })
            .to([box1, box2, box3, box4], {
                yPercent: 100,
                stagger: .2
            })
        }

    } catch (error) {
        console.log(error)
        NotFound()
    }
    
}

export const transitionPageOut = (href: string, router: AppRouterInstance) => {

    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')
    const box3 = document.getElementById('box-3')
    const box4 = document.getElementById('box-4')

    try {
        if(box1 && box2 && box3 && box4) {

            if(href && href == '/') {
                box1.innerHTML = '<span>2</span>'
                box2.innerHTML = '<span>0</span>'
                box3.innerHTML = '<span>2</span>'
                box4.innerHTML = '<span>5</span>'

            } else {
                box1.innerHTML = '<span>C</span>'
                box2.innerHTML = '<span>A</span>'
                box3.innerHTML = '<span>S</span>'
                box4.innerHTML = '<span>E</span>'
            }

            const eOut = gsap.timeline()
    
            eOut
            .set([box1, box2, box3, box4], {
                yPercent: -100,
                stagger: .2
            })
            .to([box1, box2, box3, box4], {
                yPercent: 0,
                stagger: .2,
                onComplete: () => {
                    router.push(href)
                }
            })
        }
    } catch (error) {
        console.log(error)
        NotFound()
    }
}