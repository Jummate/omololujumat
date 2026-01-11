import { Github, Linkedin, Mail } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { FaXTwitter } from 'react-icons/fa6';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

function Contact() {
   return (
      <section>
         <PageHeader label="Contact" />

         <div className="max-w-2xl mx-auto">
            <h1 className="text-foreground/70 text-sm mb-10">
               {' '}
               Have a project in mind or just want to say hi? Fill out the form
               below and I'll get back to you soon.{' '}
            </h1>

            <ContactForm />

            <div className="flex gap-3 justify-between my-5 items-center">
               <div className="flex-1 h-0.5 bg-muted/10"></div>
               <span className="text-center text-muted/70 text-xs">
                  Or connect via
               </span>
               <div className="flex-1 h-0.5 bg-muted/10"></div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-7">
               <Link
                  to="https://github.com/Jummate"
                  aria-label="GitHub"
                  title="GitHub"
                  className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
               >
                  <Github size={20} />
               </Link>

               <Link
                  to="https://www.linkedin.com/in/omololu-jumat-1405"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
               >
                  <Linkedin size={20} />
               </Link>
               <Link
                  to="https://x.com/omololu_jumat"
                  aria-label="X Twitter"
                  title="X Twitter"
                  className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
               >
                  <FaXTwitter size={20} />
               </Link>
               <Link
                  to="mailto:omololujumat@gmail.com"
                  aria-label="Mail"
                  title="Mail"
                  className="rounded-full p-2 bg-muted-foreground text-white hover:bg-primary"
               >
                  <Mail size={20} />
               </Link>
            </div>
         </div>
      </section>
   );
}

export default Contact;
