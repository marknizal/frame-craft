import type { FC } from "react";
import { LuArrowRight } from "react-icons/lu";
import { PROFILES } from "./data";

import * as S from "./styles";

const Section2: FC = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <h1>Work Smarter, Together</h1>
        <h3>All your tasks, teammates, and timelines</h3>

        <p>
          Streamline project planning, boost team alignment, and deliver results
          faster with an intuitive workspace built for real collaboration.
          Whether remote or in-office, keep your team moving with clarity and
          purpose.
        </p>

        <button>
          <span>Try It Free</span>
          <LuArrowRight />
        </button>
      </S.Left>

      <S.Right>
        <S.Teamwork>
          <h1>Built for Teamwork</h1>
          <p>Chat, share, and track progress—together.</p>

          <div className="action">
            <button>Sign up now</button>
            <span>Trusted by 10,000+ teams</span>
          </div>
        </S.Teamwork>

        {PROFILES.map((item) => (
          <S.Profile key={item.id} style={{ backgroundColor: item.bg }}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </S.Profile>
        ))}

        <S.Completion>
          <h1>Task Completion</h1>
          <p>
            Teams finish work faster with smart workflows and real-time updates.
          </p>
        </S.Completion>
      </S.Right>
    </S.Wrapper>
  );
};

export default Section2;
