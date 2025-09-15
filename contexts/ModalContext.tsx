'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

import { LoginModal } from '@/app/_components';

export type ModalType = 'login';

interface ModalContextType {
  closeModal: () => void;
  modalState: ModalState;
  openModal: (type: ModalType, props?: any) => void;
}

interface ModalState {
  isOpen: boolean;
  props?: any;
  type: ModalType | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    props: undefined,
    type: null,
  });

  const openModal = (type: ModalType, props?: any) => {
    setModalState({ isOpen: true, props, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, props: undefined, type: null });
  };

  const renderModal = () => {
    if (!modalState.isOpen || !modalState.type) return null;

    switch (modalState.type) {
      case 'login':
        return <LoginModal isOpen={modalState.isOpen} onClose={closeModal} {...modalState.props} />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider
      value={{
        closeModal,
        modalState,
        openModal,
      }}
    >
      {children}
      {renderModal()}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal은 ModalProvider 내에서 사용되어야 합니다');
  }
  return context;
}
