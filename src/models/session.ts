export interface Session {
  id: string;
  session_type_id: string;
  modality: "SINGLES" | "DOUBLES";
  status: "DRAFT" | "REQUEST" | "ACTIVE" | "CANCELED";
  start: string;
  end: string;
}
