"use client";
import MultiplayerList from '../../components/MultiplayerList';
import { MpEntry } from '../../types/MpEntry';

const infoText = "Master the art of diplomacy, trade, and warfare in a dynamic world spanning centuries.";
const mpList: MpEntry[] = [
  { name: "One Multiplayer Round", startYear: 1444, players: "8/16", status: "Sign-In", href: "/ck3-list/iron-throne" },
  { name: "Some other round", startYear: 1444, players: "12/12", status: "Running", href: "/ck3-list/dynasty-wars" },
  { name: "Again another round", startYear: 1444, players: "16/16", status: "Completed", href: "/ck3-list/united" },
  { name: "Colonisation round ?", startYear: 1444, players: "10/10", status: "Completed", href: "/ck3-list/mayhem" },
  { name: "An even older round", startYear: 1444, players: "18/18", status: "Completed", href: "/ck3-list/mayhem" },

];

export default function Page() {
  return (
    <MultiplayerList
      title="Europa Universalis 4 & 5 Multiplayer"
      infoText={infoText}
      image="/images/eu.png"
      mpList={mpList}
    />
  );
}