import type { FC } from "react";
import { LuExternalLink } from "react-icons/lu";
import { Avatar, Button, Space } from "antd";
import { data } from "./data";

import * as S from "./styles";

const Section1: FC = () => {
  return (
    <S.Wrapper>
      <S.Left>
        <S.Card className="task">
          <h1>{data.task.title}</h1>
          <p>{data.task.desc}</p>

          <Space>
            <Button type="primary" icon={<LuExternalLink />}>
              Get it now
            </Button>
            <Button>Learn more</Button>
          </Space>

          <S.Hero src={data.task.img} alt="hero" loading="lazy" />
        </S.Card>

        <div className="grid-items">
          <S.Card>
            <h1>{data.workflows.title}</h1>
            <p>{data.workflows.desc}</p>
            <S.Frame src={data.workflows.img} alt="workflows" loading="lazy" />
          </S.Card>

          <S.Card className="tracking">
            <h1>{data.tracking.title}</h1>
            <p>{data.tracking.desc}</p>
            <S.Mockup src={data.tracking.img} alt="tracking" loading="lazy" />
          </S.Card>
        </div>
      </S.Left>

      <S.Right>
        <h1>{data.collab.title}</h1>
        <p>{data.collab.desc}</p>

        <Avatar.Group>
          {data.collab.avatars.map((src, i) => (
            <Avatar key={i} alt="avatar" src={src} size={60} />
          ))}
        </Avatar.Group>
      </S.Right>
    </S.Wrapper>
  );
};

export default Section1;
