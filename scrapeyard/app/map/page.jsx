'use client'

import ProductBrief from "@/components/data_display/prod_brief"
import Map from "@/components/map_elements/map"
import SampleResults from "@/components/search_elements/results"
import SearchBar from "@/components/search_elements/search_bar"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function MapsTest(){
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([
        {
            name:"chevy",
            price:'233',
            coord: [51.505, -0.09],
            transmission: "auto",
            cost: 245,
            mileage: 12.3,
            fuel_type: 'diesel',
            prev_owner_count: 3
        },
        {
            name:'mazda',
            price: '431',
            coord: [51.5051, -0.10],
            transmission: "manuel",
            cost: 912,
            mileage: 39.2,
            fuel_type: 'petrol',
            prev_owner_count: 1
        },
    ]);
    const [currBrief, setCurrBrief] = useState({});
    const [currIndex, setCurrIndex] = useState(null);
    const [focusPos, setFocusPos] = useState(data[0]);

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
            <div className="bg-light flex-1 h-screen flex flex-col p-[1vw]">
                <div className="text-black text-[3vw] tracking-tighter font-semibold">
                    {/* <Image src="/lgog.png" width={1} height={1}
                     className="min-h-[4vw] w-auto" unoptimized/> */}SCRAPEYARD
                </div>
                <div className="w-full">
                    <SearchBar/>
                </div>
                <div className="flex-1">
                    <SampleResults open={open} setOpen={setOpen}
                    data={data}
                    setCurrIndex={setCurrIndex}
                    currIndex={currIndex}
                    setFocusPos={setFocusPos}
                    />
                </div>
            </div>
            <div className="bg-light flex-[3] flex justify-end ">
                <div className="rounded-[3vw] bg-red-300 flex-1 overflow-hidden">
                    <Map data={data} focusPos={focusPos} setFocusPos={setFocusPos}/>
                </div>
                <ProductBrief open={open} setOpen={setOpen} currBrief={currBrief}/>
            </div>
        </div>
    )
}