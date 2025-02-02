'use client'

import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import error from "next/error"

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
                stagger: {
                    amount: .5
                }
            })
            .to([box1, box2, box3, box4], {
                yPercent: 100,
                stagger: {
                    amount: .5
                }
            })
        }

    } catch (error) {
        console.log(error)
    }
    
}

export const transitionPageOut = (href: string, router: AppRouterInstance) => {

    const box1 = document.getElementById('box-1')
    const box2 = document.getElementById('box-2')
    const box3 = document.getElementById('box-3')
    const box4 = document.getElementById('box-4')

    const route = href
    const pathURL = route.split('/')

    try {
        if(box1 && box2 && box3 && box4) {

            if(href === '/') {
                box1.innerHTML = '<span>2</span>'
                box2.innerHTML = '<span>0</span>'
                box3.innerHTML = '<span>2</span>'
                box4.innerHTML = '<span>5</span>'
            }
            else if(pathURL[0] === 'cases' || pathURL[1] === 'cases') {
                box1.innerHTML = '<span>C</span>'
                box2.innerHTML = '<span>A</span>'
                box3.innerHTML = '<span>S</span>'
                box4.innerHTML = '<span>E</span>'
            }
            else if(pathURL[0] === 'lgpd') {
                box1.innerHTML = '<span>L</span>'
                box2.innerHTML = '<span>G</span>'
                box3.innerHTML = '<span>P</span>'
                box4.innerHTML = '<span>D</span>'
            }
            else if(error) {
                box1.innerHTML = '<span>O</span>'
                box2.innerHTML = '<span>P</span>'
                box3.innerHTML = '<span>S</span>'
                box4.innerHTML = '<span>!</span>'
            }

            const eOut = gsap.timeline()
    
            eOut
            .set([box1, box2, box3, box4], {
                yPercent: -100,
                stagger: {
                    amount: .5
                }
            })
            .to([box1, box2, box3, box4], {
                yPercent: 0,
                stagger: {
                    amount: .5
                },
                onComplete: () => {
                    router.push(href)
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}