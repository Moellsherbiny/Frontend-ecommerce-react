import DotStyle from './dots.module.scss'

type DotsProps ={
    count:number,
    activeIndex:number,
}
export default function Dots({count, activeIndex}: DotsProps) {
    const dots = []
    for(let i = 0; i< count; i++)
                                                                                                                  {
        if(activeIndex === i)
            dots.push(<div key={i} className={DotStyle.activeDot} ><span></span></div>)
        else
            dots.push(<div key={i} className={DotStyle.dot} ></div>)
    }
  return (
    <div className={DotStyle.dots}>
        {dots}
    </div>
  )
}
