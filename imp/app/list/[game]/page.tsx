"use client";
import { useParams } from 'next/navigation';
import MultiplayerList from '@/components/MultiplayerList';
import { MpEntry } from '@/types/MpEntry';

const gameData: Record<string, { title: string; infoText: string; image: string; mpList: MpEntry[] }> = {
  ck3: {
        title: "CK3 Multiplayer",
        infoText: "Embark on a medieval journey...",
        image: "/images/ck.png",
        mpList: [
            { id: "1", name: "The Iron Throne", startYear: 1066, players: "12/16", status: "Sign-In" },
            { id: "2", name: "Dynasty Wars", startYear: 1204, players: "8/12", status: "Running" },
            { id: "3", name: "Crusader Kings United", startYear: 867, players: "16/16", status: "Completed" },
        ],
  },
  vic: {
        title: "Victoria 3 Multiplayer",
        infoText: "Dive into the complexities of the 19th century with deep economic and political systems.",
        image: "/images/vic3.png",
        mpList: [ 
            { id: "4", name: "One Victoria Round", startYear: 1836, players: "8/16", status: "Sign-In" },
            { id: "5", name: "Some other Victoria round", startYear: 1836, players: "12/12", status: "Running" },
            { id: "6", name: "Again another Victoria round", startYear: 1836, players: "16/16", status: "Completed" },
            { id: "7", name: "Colonisation Victoria round ?", startYear: 1836, players: "10/10", status: "Completed" },
            { id: "8", name: "An even older Victoria round", startYear: 1836, players: "18/21", status: "Completed" },

        ],
  },
    eu: {
        title: "Europa Universalis 4 & 5 Multiplayer",
        infoText: "Master the art of diplomacy, trade, and warfare in a dynamic world spanning centuries.",
        image: "/images/eu.png", 
        mpList: [
            { id: "9", name: "One Multiplayer Round", startYear: 1444, players: "8/16", status: "Sign-In" }, 
            { id: "10", name: "Some other round", startYear: 1444, players: "12/12", status: "Running" },
            { id: "11", name: "Again another round", startYear: 1444, players: "16/16", status: "Completed" },
            { id: "12", name: "Colonisation round ?", startYear: 1444, players: "10/10", status: "Completed" },
            { id: "13", name: "An even older round", startYear: 1444, players: "18/18", status: "Completed" },
        ],
    },
    hoi4: {
        title: "Hearts of Iron Multiplayer",
        infoText: "Experience the intensity of World War II with strategic depth and historical accuracy.",
        image: "/images/hoi4.png",
        mpList: [   
            { id: "14", name: "One HOI Round", startYear: 1939, players: "8/16", status: "Sign-In" },
            { id: "15", name: "Some other HOIround", startYear: 1939, players: "12/12", status: "Running" },
            { id: "16", name: "Again another HOIround", startYear: 1939, players: "16/16", status: "Completed" },
            { id: "17", name: "Colonisation HOI round ?", startYear: 1939, players: "10/10", status: "Completed" },
            { id: "18", name: "An even older HOI round", startYear: 1939, players: "18/18", status: "Completed" },
        ],
    },
    MegaCampaign: {
        title: "Paradox Mega Campaign",
        infoText: "Join an epic saga spanning multiple Paradox Interactive games, where your actions in one game influence the next.",
        image: "/images/paradox.png",
        mpList: [
            { id: "19", name: "The Grand Campaign", startYear: 1066, players: "20/20", status: "Sign-In" },
            { id: "20", name: "The Colonial Era", startYear: 1066, players: "15/15", status: "Completed" },   
            { id: "21", name: "World at War", startYear: 1066, players: "18/18", status: "Completed" },
        ],
    },
};

export default function Page() {
  const { game } = useParams();
  const data = gameData[game as string];

  if (!data) return <div>Game not found.</div>;

  return (
    <MultiplayerList
      title={data.title}
      infoText={data.infoText}
      image={data.image}
      mpList={data.mpList}
    />
  );
}