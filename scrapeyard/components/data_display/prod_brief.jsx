'use client'

import { useEffect, useState } from "react"
import ArrowDownLeft from "../svg/expand_arrow"
import ChevronDefaultLeft from "../svg/contract_arrow"

export default function ProductBrief({open}){
    const [expand, setExpand] = useState({w:"min-w-[30vw]", h:"min-h-[20vw]"})
    useEffect(()=>{
        console.log("hello", expand.h)
    },[])
    const handleClick=()=>{
        if (expand.w=="min-w-[30vw]"){
            setExpand({w:"min-w-[50vw]", h:"min-h-[98vh]"})
        }else{
            setExpand({w:"min-w-[30vw]", h:"min-h-[20vw]"})
        }
        console.log("hello", expand)
    }
    return(
        <div className={`absolute z-[500] text-black ${expand.w} ${expand.h} bg-white rounded-[3vw] m-[0.5vw] flex flex-col p-[1.5vw] ${open?'':'hidden'}`}>
            <div className={`${expand.w=='min-w-[30vw]'?'hidden':''}`}>
                <button onClick={handleClick}><ChevronDefaultLeft/></button>
            </div>
            <div className="flex-1"></div>
            <div className={`${expand.w=='min-w-[30vw]'?'':'hidden'}`}>
                <button onClick={handleClick}>
                    <ArrowDownLeft/>
                </button>
            </div>
        </div>
    )
}