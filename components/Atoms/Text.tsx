
import React from 'react'
// import useWindowSize from '../../custome-hooks/useWindowSize'

interface Text {
    text: string,
    classes?: string

}
interface AnimatedText extends Text {
    animation?: string
}

export function Text({ text, classes }: Text): React.ReactElement {
    return (
        <p className={classes} style={{ fontFamily: 'Ubuntu' }}>{text}</p>
    )
}

// export function AnimatedText({ text, classes, animation }: AnimatedText): React.ReactElement {
//     const screenWidth = useWindowSize();
//     const [animationType, setAnimationType] = React.useState<string>('')
//     React.useEffect(() => {
//         if (screenWidth > 768) {
//             setAnimationType(animation || 'fade-up')
//         } else {
//             setAnimationType(Math.random() > 0.5 ? 'fade-up' : "fade-down")
//         }
//     }, [screenWidth,animation])
//     return (
//         <p className={classes} style={{ fontFamily: 'Ubuntu' }} data-aos={animationType}>{text}</p>
//     )
// }


export function HighlightText({ text, classes,underline }: { text: string, classes?: string,underline?:boolean }) {
    return (
        <>
            <span style={{ fontFamily: 'Fredoka' }} className={`${classes}  text-[#00dc9b] `}>
                {text}
            </span>
        </>
    )
}