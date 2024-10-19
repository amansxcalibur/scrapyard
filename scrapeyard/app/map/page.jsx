'use client'

import ProductBrief from "@/components/data_display/prod_brief"
import Map from "@/components/map_elements/map"
import SampleResults from "@/components/search_elements/results"
import SearchBar from "@/components/search_elements/search_bar"
import { useEffect, useState } from "react"

export default function MapsTest(){
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([
        {
            name:"chevy",
            price:'233'
        },
        {
            name:'mazda',
            price: '431'
        }
    ]);
    const [currBrief, setCurrBrief] = useState({});
    const [currIndex, setCurrIndex] = useState(null)

    useEffect(()=>{
        //axios get
        //activate when search bar gets submitted
    })
    useEffect(()=>{
        if (currIndex != null){
            setCurrBrief(data[currIndex]);
        }
    },[currIndex])
    return(
        <div className="flex-1 flex">
            <div className="bg-purple-500 flex-1 h-screen flex flex-col p-[1vw]">
                <div className="w-full">
                    <SearchBar/>
                </div>
                <div className="flex-1">
                    <SampleResults open={open} setOpen={setOpen}
                    data={data}
                    setCurrIndex={setCurrIndex}
                    currIndex={currIndex}
                    />
                </div>
            </div>
            <div className="bg-blue-300 flex-[3] flex justify-end">
                <div className="rounded-[3vw] bg-red-300 flex-1 overflow-hidden">
                    <Map/>
                </div>
                <ProductBrief open={open} setOpen={setOpen} currBrief={currBrief}/>
            </div>
        </div>
    )
}