import { useForm, ValidationError } from '@formspree/react';
import Input from './Input';
import { Hash, Info, Mail, SendHorizonal, User } from 'lucide-react';

function ContactForm() {
   const [state, handleSubmit] = useForm('xeeqlopo');
   if (state.succeeded) {
      return (
         <div className="p-4 rounded-lg bg-green-200 text-green-900">
            🎉 Thanks! Your message has been sent.
            <button
               className="block mt-3 underline cursor-pointer"
               onClick={() => window.location.reload()}
            >
               Send another message
            </button>
         </div>
      );
   }
   return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
         <Input
            placeholder="Jane Doe"
            icon={<User size={15} />}
            label="Name"
            id="name"
         />
         <Input
            type="email"
            placeholder="jane.doe@gmail.com"
            icon={<Mail size={15} />}
            label="Email"
            required={true}
            id="email"
         />
         <p className="text-xs text-muted/70 inline-flex items-center gap-2">
            <Info size={16} /> I only use your email to reply — nothing is
            stored or shared.
         </p>
         <ValidationError prefix="Email" field="email" errors={state.errors} />
         <Input
            type="text"
            placeholder="Project Inquiry"
            icon={<Hash size={15} />}
            label="Subject"
            id="subject"
         />

         <div className="flex flex-col gap-2">
            <label className="text-foreground" htmlFor="message">
               Message
            </label>
            <textarea
               //  className="w-full border-0 focus:outline-0 resize-none bg-amber-500"
               className="ring-1 ring-primary-dark/50 rounded-sm p-1 px-3 bg-primary/5 text-foreground text-xs focus:outline-2 focus:outline-primary"
               placeholder="Tell me about your project..."
               required
               id="message"
               name="message"
            />
         </div>

         <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
         />

         <button
            type="submit"
            disabled={state.submitting}
            className="bg-primary text-primary-foreground p-4 rounded-lg flex flex-1 gap-2 cursor-pointer items-center justify-center hover:bg-primary-dark transition-colors duration-500"
         >
            Send Message <SendHorizonal />
         </button>
         <p className="text-[10px] text-muted/50 text-center mt-1">
            I respect your privacy — no spam, no sharing.
         </p>
      </form>
   );
}

export default ContactForm;
