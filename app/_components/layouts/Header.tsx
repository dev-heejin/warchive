'use client';

import { LogoIcon } from '@/app/_components/common';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useModal } from '@/contexts/ModalContext';

export default function Header() {
  const { signOut, user } = useAuth();
  const { openModal } = useModal();

  const handleLoginModal = async () => {
    if (user) {
      return await signOut();
    }
    openModal('login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-300">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 md:h-16">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                <LogoIcon />
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Button className="text-sm sm:text-base text-gray-600" onClick={handleLoginModal}>
              {user ? '로그아웃' : '로그인'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
