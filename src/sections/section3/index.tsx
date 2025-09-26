import type { FC } from "react";
import Profile from "../../assets/A5.jpg";

import { Avatar } from "antd";
import * as S from "./styles";

const Section3: FC = () => {
  return (
    <S.Wrapper>
      <S.Block>
        <h1 className="subtitle">
          Strategic design that captures who you are—and who you’re here for.
        </h1>

        <h1 className="title">Bold Brands with Purpose</h1>

        <p className="description">
          I craft standout brand identities for founders ready to be seen,
          heard, and remembered.
        </p>
      </S.Block>

      <S.Button>
        <Avatar size={50} src={Profile} alt="Avatar" />
        Book 30 min Call
      </S.Button>
    </S.Wrapper>
  );
};

export default Section3;
