import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Got Radio The 60's",
            artist: "60's",
            cover: "https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-modern-square-cool-music-for-party-lights-png-image_1629696.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "http://pureplay.cdnstream1.com/6011_128.mp3",
            active: true,
        },
    ];
}

export default chillHop;

