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
        <h3>Get In Touch</h3>
        <p>
          I’m interested in freelance opportunities – especially ambitious or
          large projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <Button
          text="Send Message"
          extraStyle="p-20"
        />
      </article>
    </section>
  );
};
