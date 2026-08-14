import CertificationsView from "./certifications/views/certifications-view";
import EducationView from "./education/views/education-view";
import IntroduceView from "./introduce/views/introduce-view";
import MySkillsView from "./my-skills/views/my-skills-view";

export default function HomeView() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-y-4 px-4 sm:px-6 lg:px-0">
      <IntroduceView />
      <div className="grid gap-x-3 gap-y-4 sm:grid-cols-1 lg:grid-cols-2">
        <EducationView />
        <CertificationsView />
      </div>
      <MySkillsView />
    </div>
  );
}