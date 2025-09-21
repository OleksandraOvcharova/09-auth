import { nextServer } from "./api";

import type { User } from "@/types/user";
import type { Note, NewNoteData, NotesHttpResponse } from "@/types/note.ts";

export async function fetchNotes(
  search: string,
  page: number,
  tag: string | undefined
): Promise<NotesHttpResponse> {
  const response = await nextServer.get<NotesHttpResponse>("/notes", {
    params: {
      search,
      page,
      perPage: 9,
      tag,
    },
  });
  return response.data;
}

export async function createNote(newNote: NewNoteData) {
  const response = await nextServer.post<Note>("/notes", newNote);

  return response.data;
}

export async function deleteNote(noteId: string) {
  const response = await nextServer.delete<Note>(`/notes/${noteId}`);

  return response.data;
}

export async function fetchNoteById(id: string) {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
}

export type RegisterRequest = {
  email: string;
  password: string;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: LoginRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

type CheckSessionRequest = {
  success: boolean;
};

export const checkSession = async () => {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
};

export const getMe = async () => {
  const { data } = await nextServer.get<User>("/users/me");
  return data;
};

export type UpdateUserRequest = {
  username?: string;
};

export const updateMe = async (payload: UpdateUserRequest) => {
  const res = await nextServer.patch<User>("/users/me", payload);
  return res.data;
};

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};
