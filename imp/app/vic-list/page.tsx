"use client";
import MultiplayerList from '../../components/MultiplayerList';
import { MpEntry } from '../../types/MpEntry';

const infoText = "Dive into the complexities of the 19th century with deep economic and political systems.";
const mpList: MpEntry[] = [
  { name: "One Victoria Round", startYear: 1836, players: "8/16", status: "Sign-In", href: "/ck3-list/iron-throne" },
  { name: "Some other Victoria round", startYear: 1836, players: "12/12", status: "Running", href: "/ck3-list/dynasty-wars" },
  { name: "Again another Victoria round", startYear: 1836, players: "16/16", status: "Completed", href: "/ck3-list/united" },
  { name: "Colonisation Victoria round ?", startYear: 1836, players: "10/10", status: "Completed", href: "/ck3-list/mayhem" },
  { name: "An even older Victoria round", startYear: 1836, players: "18/21", status: "Completed", href: "/ck3-list/mayhem" },

];

export default function Page() {
  return (
    <MultiplayerList
      title="Victoria 3 Multiplayer"
      infoText={infoText}
      image="/images/vic3.png"
      mpList={mpList}
    />
  );
}