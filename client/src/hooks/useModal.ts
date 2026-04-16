import { useCallback, useState } from "react";
import type { UserColumns } from "../interface/UserColumns";

export const useModal = (initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [selectedUser, setSelectUser] = useState<UserColumns | null>(null)

  const openModal = useCallback((user?: UserColumns | null) => {
    setSelectUser(user || null)
    setIsOpen(true)
  }, []);

  const closeModal = useCallback(() => {
    setSelectUser(null)
    setIsOpen(false)
  }, []);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, selectedUser, openModal, closeModal, toggleModal };
};