import AboutMe from "../components/about-me";
import ContactInfo from "../components/contact-info";

export default function IntroduceView() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
    >
      <AboutMe />
      <ContactInfo />
    </section>
  );
}