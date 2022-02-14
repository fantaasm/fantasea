export type Technology = {
  color: string
  text: string
}

export class Technologies {
  static next: Technology = {color: "#22c55e",  text: "Next"}
  static react: Technology = {color: "#0ea5e9",text: "React"}
  static asp: Technology = {color: "#d946ef",  text: "ASP Core"}
  static cSharp: Technology = {color: "#10b981",  text: "C#"}
  static tailwind: Technology = {color: "#06b6d4",  text: "Tailwind"}
  static unity: Technology = {color: "#06b6d4",  text: "Unity"}
  static unrealEngine: Technology = {color: "#e11d48",  text: "UnrealEngine"}
  static java: Technology = {color: "#fb923c",  text: "Java"}
  static sqlServer: Technology = {color: "#6b21a8",  text: "SQL Server"}
}

export enum projectType {
  FullStack,
  Mod,
  Game
}