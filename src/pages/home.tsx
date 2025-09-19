import { Main, Section } from "../components/shared";
import Section1 from "../sections/section1";

const Home = () => {
  return (
    <Main>
      <Section $bg="#F2F2F3">
        <Section1 />
      </Section>
    </Main>
  );
};

export default Home;
