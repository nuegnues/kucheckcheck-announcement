import { create } from "zustand";

const useAnnounceStore = create((set) => ({
  announce: [],

  addAnnounce: (title, content) =>
    set((state) => ({
      announce: [
        { id: Date.now(), title: title, content: content, date: new Date() },
        ...state.announce,
      ],
    })),

  deleteAnnounce: (id) =>
    set((state) => ({ announce: state.announce.filter((e) => e.id != id) })),

  modifyAnnounce: (id, title, content) =>
    set((state) => ({
      announce: state.announce.map((e) =>
        e.id == id ? { ...e, title: title, content: content } : e
      ),
    })),
}));

export default useAnnounceStore;
