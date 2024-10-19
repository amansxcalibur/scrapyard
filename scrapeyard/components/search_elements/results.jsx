import Image from "next/image";
import { useState } from "react";

export default function SampleResults({open, setOpen, setCurrIndex, currIndex, data, setFocusPos}){
    // const fruits = ["Apple", "Mango", "Banana", "GFG"];
    const handleShowBrief=(index, fruit)=>{

        if (open && currIndex!=undefined && index==currIndex){
            setOpen(false)
        }else{
            setOpen(true)
            setCurrIndex(index)
            setFocusPos(fruit)
        }
        console.log("clicked brief open", open, index, fruit)
    }
    return(
        <div>
            <ul className="text-black mt-[2vw]">
                {data.map((fruit, index) => (
                    <li>
                    <button key={index} className="min-h-[8vw] flex items-center w-full" onClick={()=>{handleShowBrief(index, fruit)}}>
                        <div className="max-h-[7.5vw] overflow-hidden rounded-[0.5vw]">
                            <Image src="/uWu.jpg" width={5} height={5} className="h-auto min-w-[7.5vw]" unoptimized/>
                        </div>
                        <div className="flex flex-col min-h-[7.5vw] flex-1 mx-[1vw]">
                            <div className="text-start">
                                <p className="text-[1.5vw]">{fruit.name} {index}</p>
                            </div>
                            <div className="flex -mt-[0.5vw]">
                                <div className="hover:bg-white rounded-full min-h-[3vw] min-w-[3vw] flex justify-center items-center">
                                    <Image src="/OLX.png" width={1} height={1} className="min-h-[2vw] w-auto"/>
                                </div>
                                <div className="hover:bg-white rounded-full min-h-[3vw] min-w-[3vw] flex justify-center items-center">
                                    <Image src="/cars24web.webp" width={1} height={1} className="min-h-[2vw] w-auto"/>
                                </div>
                                <div className="hover:bg-white rounded-full min-h-[3vw] min-w-[3vw] flex justify-center items-center">
                                    <Image src="/carwale.png" width={1} height={1} className="min-h-[2vw] w-auto"/>
                                </div>
                            </div>
                            <div className="flex-1"></div>
                        </div>
                    </button>
                    <div className="w-full h-0.5 bg-black rounded-[1vw] my-[1vw]"></div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}