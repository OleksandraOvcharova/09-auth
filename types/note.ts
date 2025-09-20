export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export type NoteTag = "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";

export interface NewNoteData {
  title: string;
  content?: string;
  tag: NoteTag;
}

export interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}
