"use client";
import MultiplayerList from '../../components/MultiplayerList';
import { MpEntry } from '../../types/MpEntry';

const infoText = "Experience the intensity of World War II with strategic depth and historical accuracy.";
const mpList: MpEntry[] = [
  { name: "One HOI Round", startYear: 1939, players: "8/16", status: "Sign-In", href: "/ck3-list/iron-throne" },
  { name: "Some other HOIround", startYear: 1939, players: "12/12", status: "Running", href: "/ck3-list/dynasty-wars" },
  { name: "Again another HOIround", startYear: 1939, players: "16/16", status: "Completed", href: "/ck3-list/united" },
  { name: "Colonisation HOI round ?", startYear: 1939, players: "10/10", status: "Completed", href: "/ck3-list/mayhem" },
  { name: "An even older HOI round", startYear: 1939, players: "18/18", status: "Completed", href: "/ck3-list/mayhem" },

];

export default function Page() {
  return (
    <MultiplayerList
      title="Hearts of Iron Multiplayer"
      infoText={infoText}
      image="/images/hoi4.png"
      mpList={mpList}
    />
  );
}