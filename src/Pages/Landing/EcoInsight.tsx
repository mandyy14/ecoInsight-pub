import BackToTop from "../../components/BackToTop/BackToTop";
import Footer2 from "../../components/footer/Footer2";
import Hero4 from "../../components/hero/Hero4";
import NavbarMenu from "../../components/navbar/index";
import { teamMembers } from "../../components/team/data";
import Team from "../../components/team/Team";
import { features } from "../landing/data";
import Features from "./Features";
import Features2 from "./Features2";
import Features3 from "./Features3";

const EcoInsight = () => {
  return (
    <>
      <div id="home" className="header-2 primary">
        <NavbarMenu
          navClass="navbar-light zindex-10"
          isSticky={false}
          fixedWidth
          hideSearch
          buttonClass="btn-primary btn-sm"
        />
        <Hero4 />
      </div>

      <section id="features">
        <Features
          features={features}
          containerClass="position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7"
        />
        <Features2 />
        <Features3 />
      </section>

      <section id="team">
        <Team teamMembers={teamMembers} />
      </section>

      <Footer2 />

      <BackToTop />
    </>
  );
};

export default EcoInsight;
