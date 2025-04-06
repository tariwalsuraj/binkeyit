// Desc: Custom hook to detect if the user is on a mobile device
//  where logo and ussr logo will be not displayed
import React, { useEffect, useState } from "react"

const useMobile = (breakpoint = 768)=>{
    const [isMobile,setIsMobile] = useState(window.innerWidth < breakpoint)
    // res
    const handleResize = ()=>{
        const checkpoint = window.innerWidth < breakpoint
        setIsMobile(checkpoint)
    }
    // call handleResize and add event listener
    useEffect(()=>{
        handleResize()

        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return [ isMobile ]
}

export default useMobile
