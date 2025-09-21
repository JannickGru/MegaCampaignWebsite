"use client";
import MultiplayerList, { MpEntry } from '../../components/MultiplayerList';

const infoText = "Embark on a medieval journey of intrigue, romance, and conquest in a world shaped by dynasties.";
const mpList: MpEntry[] = [
  { name: "The Iron Throne", startYear: 1066, players: "17/24", status: "Sign-In", href: "/ck3-list/iron-throne" },
  { name: "Dynasty Wars", startYear: 1204, players: "12/12", status: "Running", href: "/ck3-list/dynasty-wars" },
  { name: "Crusader Kings United", startYear: 867, players: "16/16", status: "Completed", href: "/ck3-list/united" },
  { name: "Medieval Mayhem", startYear: 1081, players: "13/14", status: "Completed", href: "/ck3-list/mayhem" },
];

export default function Page() {
  return (
    <MultiplayerList
      title="CK3 Multiplayer"
      infoText={infoText}
      image="/images/ck.png"
      mpList={mpList}
    />
  );
}