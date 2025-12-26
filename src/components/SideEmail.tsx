export const SideEmail = () => {
   return (
      <aside className="hidden lg:block w-14 h-96 fixed right-0 bottom-0">
         <div className="flex flex-col items-center justify-end gap-3 h-full">
            <a
               href="mailto:omololujumat@gmail.com"
               aria-label="Email"
               title="Email"
            >
               <span className="[writing-mode:vertical-lr] text-muted-foreground hover:text-primary">
                  omololujumat@gmail.com
               </span>
            </a>
            <div className="flex-1 w-0.5 bg-muted-foreground"></div>
         </div>
      </aside>
   );
};
