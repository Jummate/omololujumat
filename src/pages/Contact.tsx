import { Hash, Mail, SendHorizonal, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Input from '../components/Input';

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

            <form action="" className="flex flex-col gap-5">
               <Input
                  placeholder="Jane Doe"
                  icon={<User size={15} />}
                  label="Name"
               />
               <Input
                  type="email"
                  placeholder="jane.doe@gmail.com"
                  icon={<Mail size={15} />}
                  label="Email"
               />
               <Input
                  type="text"
                  placeholder="Project Inquiry"
                  icon={<Hash size={15} />}
                  label="Subject"
               />

               <div className="flex flex-col gap-2">
                  <label className="text-foreground">Message</label>
                  <textarea
                     //  className="w-full border-0 focus:outline-0 resize-none bg-amber-500"
                     className="ring-1 ring-primary-dark/50 rounded-sm p-1 px-3 bg-primary/5 text-foreground text-xs"
                     placeholder="Tell me about your project..."
                  />
               </div>

               <button className="bg-primary text-primary-foreground p-4 rounded-lg flex flex-1 gap-2 cursor-pointer items-center justify-center hover:bg-primary-dark transition-colors duration-500">
                  Send Message <SendHorizonal />
               </button>

               {/* <div className="w-full max-w-xl flex flex-col sm:flex-row gap-2 shadow-primary/40 shadow-2xl/50">
               <button
                  className="bg-primary text-primary-foreground p-4 rounded-lg flex flex-1 gap-2 cursor-pointer items-center justify-center hover:bg-primary-dark transition-colors duration-500"
               >
                  Send Message <SendHorizonal />
               </button>
           
            </div> */}
            </form>
         </div>
      </section>
   );
}

export default Contact;
