import { type ReactNode } from 'react';

type InputProps = {
   label: string;
   icon: ReactNode;
   type?: 'text' | 'email';
   placeholder: string;
   required?: boolean;
   id: string;
};

function Input({
   label,
   icon,
   type = 'text',
   placeholder,
   required = false,
   id,
}: InputProps) {
   return (
      <div className="flex flex-col gap-2">
         <label className="text-foreground">{label}</label>
         <div className="relative ring-1 ring-primary-dark/50 rounded-sm flex items-center bg-primary/5 text-foreground text-xs">
            <input
               type={type}
               className="w-full border-0 p-3 flex-1 focus:outline-2 focus:outline-primary rounded-sm"
               placeholder={placeholder}
               required={required}
               id={id}
               name={id}
            />
            <span className="absolute right-0 p-2 text-center">{icon}</span>
         </div>
      </div>
      //   <div className="flex flex-col gap-2">
      //      <label className="text-foreground">{label}</label>
      //      <div className="ring-1 ring-primary-dark/50 rounded-sm p-1 px-3 flex items-center bg-primary/5 text-foreground text-xs focus:ring-1 focus:ring-amber-300" tabIndex={-1}>
      //         <input
      //            type={type}
      //            className="w-full border-0 focus:outline-0 py-1.5"
      //            placeholder={placeholder}
      //         />
      //         <span className="pl-2 text-center">{icon}</span>
      //      </div>
      //   </div>
   );
}

export default Input;
