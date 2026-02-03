import AboutUs from "./about-us";
import ContactInfo from "./contact-info";

export default function HomeIntroduce() {
  return (
    <section
      id="about"
      className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
    >
      <AboutUs />
      <ContactInfo />
    </section>
  );
}