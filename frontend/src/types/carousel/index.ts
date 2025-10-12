import type { ReactNode } from "react"
// import type { IconType } from "react-icons"

export type CarouselItem = {
    id:number,
    image:string,
    brand: {
        icon:ReactNode,
        name:string
    }
    description:string
}

export type CarouselProps = {
    items:CarouselItem[]
}