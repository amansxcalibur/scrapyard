'use client'

import { useEffect, useState } from "react"
import ArrowDownLeft from "../svg/expand_arrow"
import ChevronDefaultLeft from "../svg/contract_arrow"
import X from "../svg/x"

export default function ProductBrief({open, setOpen, currBrief}){
    const [expand, setExpand] = useState({w:"min-w-[30vw]", h:"min-h-[20vw]"})

    const handleClick=()=>{
        if (expand.w=="min-w-[30vw]"){
            setExpand({w:"min-w-[50vw]", h:"min-h-[98vh]"})
        }else{
            setExpand({w:"min-w-[30vw]", h:"min-h-[20vw]"})
        }
        console.log("hello", expand)
    }   
    const handleClose=()=>{
        setOpen(false)
    }

    useEffect(()=>{
        if (open==false){
            setExpand({w:"min-w-[30vw]", h:"min-h-[20vw]"})
        }
    }, [open])
    return(
        <div className={`absolute z-[500] text-black ${expand.w} ${expand.h} bg-white rounded-[3vw] m-[0.5vw] flex flex-col p-[1.5vw] ${open?'':'hidden'}`}>
            <div className="flex">
                <button className={`${expand.w=='min-w-[30vw]'?'hidden':''}`} onClick={handleClick}><ChevronDefaultLeft/></button>
                <div className="w-full"></div>
                <button onClick={handleClose}><X/></button>
            </div>
            <div className="flex-1">
                {currBrief.name}
            </div>
            <div className={`${expand.w=='min-w-[30vw]'?'hidden':''} flex-1`}>{currBrief.price}</div>
            <div className={`${expand.w=='min-w-[30vw]'?'':'hidden'}`}>
                <button onClick={handleClick}>
                    <ArrowDownLeft/>
                </button>
            </div>
        </div>
    )
}