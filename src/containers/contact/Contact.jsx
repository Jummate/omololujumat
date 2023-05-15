import "./Contact.css";
import { SubHeading, BigHeading, Button } from "../../components";

export const Contact = () => {
  return (
    <section
      className="Contact__container"
      id="contact"
    >
      <BigHeading text="Contact Me" />
      {/* <SubHeading text="Get In Touch" /> */}
      <article className="Contact__wrapper">
        <h2>Get In Touch</h2>
        <div>
          <p>
            I’m currently looking for new opportunities. However, if you have
            other request or question, don’t hesitate to use the button below.
          </p>

          <p>Be sure to get a response as swift as practicable.</p>
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
