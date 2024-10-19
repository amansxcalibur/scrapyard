'use client'

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapsTest(){
    const position = [51.505, -0.09]
    return(
        <div className="flex-1 flex">
            <div className="bg-purple-500 flex-1 h-screen flex">
                <div className="w-full">
                    <input type="text" placeholder="the filter" className="w-full"></input>
                </div>
                <div className="flex-1"></div>
            </div>
            <div className="bg-blue-300 flex-[3] flex">
                <div className="rounded-[3vw] bg-red-300 flex-1 overflow-hidden">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "100vh", width: "100%" }}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>
        </div>
    )
}