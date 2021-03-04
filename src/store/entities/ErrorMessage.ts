export interface ErrorMessage {
  id: number;
  type: "error" | "warning" | "info";
  title: string;
  text: string;
  fixed: boolean;
  disappearTime?: number;
}
