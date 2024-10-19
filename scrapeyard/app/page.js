'use client'

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import SearchForm from "@/components/search_elements/search_form";

export default function Home() {
  const position = [51.23, -0.09]
  
  return (
    <div className="bg-transparent text-black">
      <div className="">
        <div className="absolute z-[500] h-screen w-screen flex justify-center items-center">
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-start">
              <p className="text-[4.5vw]">Scrapeyard</p>
              <p className="text-start px-[0.5vw] text-[1.5vw] bg-black text-white">Get your prices right</p>
            </div>
          </div>
          <div className="flex-1 flex">
            <SearchForm/>
          </div>
        </div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100vh", width: "100%" }}>
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
                  {/* <SetViewOnClick focusPos={focusPos}/> */}
              <Marker position={position}>
                  <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
              </Marker>
          </MapContainer>

        </div>
    </div>
  );
}
