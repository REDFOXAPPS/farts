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
        {
            name:"arm fart squeezing 1",
            artist: "prank",
            cover: "https://firebasestorage.googleapis.com/v0/b/fartsounds-364e1.appspot.com/o/icon2.png?alt=media&token=3ef42967-21e8-401f-8d70-b03f1c64deb8",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://firebasestorage.googleapis.com/v0/b/fartsounds-364e1.appspot.com/o/ES_Arm%20Farts%20Squeezing%20Repeatedly%2026%20-%20SFX%20Producer.mp3?alt=media&token=506be137-81f2-46e7-894b-f5245b421031",
            active: true,
        },
        {
            name:"arm fart squeezing 2",
            artist: "prank",
            cover: "https://firebasestorage.googleapis.com/v0/b/fartsounds-364e1.appspot.com/o/icon2.png?alt=media&token=3ef42967-21e8-401f-8d70-b03f1c64deb8",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://firebasestorage.googleapis.com/v0/b/fartsounds-364e1.appspot.com/o/ES_Arm%20Farts%20Squeezing%20Repeatedly%2057%20-%20SFX%20Producer.mp3?alt=media&token=b9320c4e-c831-456a-86c1-5deaa51eb2eb",
            active: false,
        },
        {
            name:"baby raspberry",
            artist: "prank",
            cover: "https://firebasestorage.googleapis.com/v0/b/fartsounds-364e1.appspot.com/o/icon2.png?alt=media&token=3ef42967-21e8-401f-8d70-b03f1c64deb8",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://firebasestorage.googleapis.com/v0/b/fartsounds-364e1.appspot.com/o/ES_Baby%20Raspberry%202%20-%20SFX%20Producer.mp3?alt=media&token=3a72178b-8f2b-45c8-b1b5-e4eaa9a7a6e9",
            active: false,
        },
    ];
}

export default chillHop;

