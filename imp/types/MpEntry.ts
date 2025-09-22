export type MpEntry = {
  name: string;
  startYear: number;
  players: string;
  status: "Sign-In" | "Running" | "Completed";
  href: string;
};
