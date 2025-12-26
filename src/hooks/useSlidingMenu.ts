import { useEffect, useState } from 'react';

/**
 * useSlidingMenu
 * Handles menu mount, slide-in/out animation, scroll lock, and Escape key
 */
export function useSlidingMenu(
   openMenu: boolean,
   setOpenMenu: (open: boolean) => void
) {
   const [showOverlay, setShowOverlay] = useState(openMenu);
   const [animateIn, setAnimateIn] = useState(false);

   useEffect(() => {
      let timer: number;

      if (openMenu) {
         // Mount the overlay first
         setShowOverlay(true);
         document.body.classList.add('overflow-hidden');

         // Trigger slide-in animation in the next tick
         timer = window.setTimeout(() => setAnimateIn(true), 0);
      } else {
         // Trigger slide-out animation
         setAnimateIn(false);
         document.body.classList.remove('overflow-hidden');

         // Unmount overlay after animation duration
         timer = window.setTimeout(() => setShowOverlay(false), 300);
      }

      return () => window.clearTimeout(timer);
   }, [openMenu]);

   // Escape key closes menu
   useEffect(() => {
      const handler = (e: KeyboardEvent) =>
         e.key === 'Escape' && setOpenMenu(false);
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
   }, [setOpenMenu]);

   return { showOverlay, animateIn };
}
