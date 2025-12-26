import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

type PageHeaderProps = {
   label: string;
};

function PageHeader({ label }: PageHeaderProps) {
   const navigate = useNavigate();
   return (
      <header className="relative text-foreground mb-12">
         <ArrowLeft
            className="absolute left-0 top-0 cursor-pointer"
            onClick={() => navigate(-1)}
         />
         <div className="flex items-center justify-center font-bold">
            <h1>{label}</h1>
         </div>
      </header>
   );
}

export default PageHeader;
