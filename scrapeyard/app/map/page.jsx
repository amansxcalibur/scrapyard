'use client'

import ProductBrief from "@/components/data_display/prod_brief"
import Map from "@/components/map_elements/map"
import SampleResults from "@/components/search_elements/results"
import SearchBar from "@/components/search_elements/search_bar"
import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { ACCESS_FILTER, ACCESS_TOKEN_NAME } from "../_constants/constants"

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
            prev_owner_count: 3,
            url:"https://www.cars24.com/buy-used-honda-city-2017-cars-kochi-16791234786/",
            source:"Cars24",
            image_url:"https://fastly-production.24c.in/hello-ar/dev/uploads/no_bg/20784cf8-5978-11ef-bd34-02ede2007fbe/66bb5f2f54610dff313842c5/85e39b0c-1aa5-40b6-ab6a-a8ea70e8c4e4/slot/16791234786-eedab0200cc24dcbb8968bd68b163127-Exterior-7.png?w=240&auto=format&dpr=2"
        },
        {
            name:'mazda',
            price: '431',
            coord: [51.5051, -0.10],
            transmission: "manuel",
            cost: 912,
            mileage: 39.2,
            fuel_type: 'petrol',
            prev_owner_count: 1,
            url:"https://www.cars24.com/buy-used-hyundai-eon-2016-cars-kochi-13036881709/",
            source:"Cars24",
            image_url:"https://fastly-production.24c.in/hello-ar/dev/uploads/no_bg/13d6eaca-548e-11ef-bd34-02ede2007fbe/66b31de4dfc86b63c06f0508/24a6b3de-b410-46d6-b42a-cee9c457619f/slot/16134630730-a6a88ee48b704036be71786fb89216aa-Exterior-7.png?w=240&auto=format&dpr=2"
        },
    ]);
    const [inter, setInter] = useState();
    const [currBrief, setCurrBrief] = useState({});
    const [currIndex, setCurrIndex] = useState(null);
    const [focusPos, setFocusPos] = useState(data[0]);
    
    
    useEffect(()=>{
        console.log('here is ',JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME)));
        // setData(JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME)))
        let temp = JSON.parse(localStorage.getItem(ACCESS_TOKEN_NAME));
        temp=Filter(temp);
        // console.log("msde the temp here", temp)
        setInter(temp)
    },[])
    // useEffect(()=>{
    //     // setData(inter)
    //     if (inter!=undefined){
    //     console.log('ghere is the inter',inter)
    //     let thirdparty=[]
    //     for (let i=0; i<inter.length; i++){
    //         // thirdparty.push(GetCoord(inter[i]));
    //         GetCoord(inter[i])
    //     }
    //     // setData(thirdparty);
    //     }
    // },[inter])

    // useEffect(()=>{
    //     //axios get
    //     //activate when search bar gets submitted
    // })
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

function Filter(temp){
    console.log(temp,'herfejfhk');
    let filtered=[]
    let cond=JSON.parse(localStorage.getItem(ACCESS_FILTER));
    for (let i=0; i<temp.length; i++){
        // console.log(JSON.parse(localStorage.getItem(ACCESS_FILTER)),'sjsjsjs')
        if (temp[i].brand==cond.maker ){
            filtered.push(temp[i]);
        }
    }
    console.log("hereis the filtered ", filtered)
    return filtered
}