'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
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
            <div className={` bg-blue-300 ${expand.w=='min-w-[30vw]'?'':'flex pb-[2vw]'} rounded-[2vw] p-[1vw]`}>
                <div className="w-[30vw] overflow-hidden max-h-[20vw] rounded-[1vw]"><Image src="/uWu.jpg" width={1} height={1} className="h-auto min-w-[30vw]"/></div>
                <div className="pl-[1vw]">
                    <div className="text-[2vw] font-semibold">{currBrief.name}</div>
                    <div className={`${expand.w=='min-w-[30vw]'?'hidden':''} flex-1 flex flex-col text-[1.2vw]`}>
                        <p className="text-[3vw] font-semibold">${currBrief.price}</p>
                        <p><strong>COORD:</strong> {currBrief.coord}</p>
                        <p><strong>Transmission:</strong> {currBrief.transmission}</p>
                        <p><strong>Cost:</strong> {currBrief.cost}</p>
                        <p><strong>Mileage:</strong> {currBrief.mileage}</p>
                        <p><strong>Fuel Type:</strong> {currBrief.fuel_type}</p>
                        <p><strong>Previous Owners: </strong>{currBrief.prev_owner_count}</p>
                    </div>
                </div>
            </div>
            <div className={`${expand.w=='min-w-[30vw]'?'hidden':''} flex-[2] flex flex-col`}>
                <p>Price: {currBrief.price}</p>
                <p>COORD: {currBrief.coord}</p>
                <p>Transmission: {currBrief.transmission}</p>
                <p>Cost: {currBrief.cost}</p>
                <p>Mileage: {currBrief.mileage}</p>
                <p>Fuel Type: {currBrief.fuel_type}</p>
                <p>Previous Owners{currBrief.prev_owner_count}</p>
            </div>
            <div className={`${expand.w=='min-w-[30vw]'?'':'hidden'}`}>
                <button onClick={handleClick}>
                    <ArrowDownLeft/>
                </button>
            </div>
        </div>
    )
}