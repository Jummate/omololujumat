import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
   return (
      <section>
         <article className="">
            <h5 className="text-2xl font-semibold text-primary mb-4">
               Hello, I'm{' '}
            </h5>

            <p className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
               Omololu Jumat
            </p>

            <p className="text-3xl mb-4 text-muted/50 font-semibold">
               I enjoy building for the web.
            </p>

            <p className="max-w-2xl leading-8 text-base md:text-lg text-muted/70">
               I'm a{' '}
               <span className="text-primary-dark font-bold">
                  Software Developer
               </span>{' '}
               passionate about turning ideas into valuable digital products. I
               craft business-critical solutions by translating complex UI/UX
               designs into fast, intuitive user interfaces.
            </p>
            <div className="mt-12 w-full max-w-xl flex flex-col sm:flex-row gap-2 shadow-primary/40 shadow-2xl/50">
               <Link
                  to="/projects"
                  className="bg-primary text-primary-foreground p-4 rounded-lg flex flex-1 gap-2 cursor-pointer items-center justify-center hover:bg-primary-dark transition-colors duration-500"
               >
                  Check out my work <MoveRight />
               </Link>
               <Link
                  to="/contact"
                  className="p-4 rounded-lg border border-primary flex flex-1 text-primary items-center justify-center hover:bg-primary-dark hover:text-primary-foreground cursor-pointer transition-colors duration-500"
               >
                  Contact Me
               </Link>
            </div>
         </article>
      </section>
   );
}

export default Hero;
