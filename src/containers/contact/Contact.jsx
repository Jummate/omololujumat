import "./Contact.css";
import { BigHeading, Button } from "../../components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  let contactRef = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const anim = gsap.fromTo(
        contactRef.current,
        { autoAlpha: 0, y: 50 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      ScrollTrigger.create({
        trigger: contactRef.current,
        animation: anim,
        toggleActions: "restart none none none",
        once: true,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      className="Contact__container"
      id="contact"
      ref={contactRef}
    >
      <BigHeading text="Contact Me" />
      <article className="Contact__wrapper">
        <h2>Get In Touch</h2>
        <div>
          <p>
            I’m currently looking for new opportunities. However, if you have
            other request or question, don’t hesitate to use the button below.
            Guaranteed to get a response as swift as practicable.
          </p>

          {/* <p></p> */}
        </div>

        <a
          href="mailto:omololujumat@gmail.com"
          title="Contact Me"
        >
          <Button
            text="Send Message"
            extraStyle="p-20 invert"
          />
        </a>
      </article>
    </section>
  );
};
