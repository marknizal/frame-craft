import { Main, Section } from "../components/shared";

import Background3 from "../assets/bg3.png";
import Section1 from "../sections/section1";
import Section2 from "../sections/section2";
import Section3 from "../sections/section3";

const Home = () => {
  return (
    <Main>
      <Section $bg="#F2F2F3">
        <Section1 />
      </Section>

      <Section>
        <Section2 />
      </Section>

      <Section $bg={Background3}>
        <Section3 />
      </Section>
    </Main>
  );
};

export default Home;
