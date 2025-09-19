import styled from "styled-components";
import { COLOR, RADIUS } from "../../styles";

import * as T from "./types";

export const Main = styled.main`
  display: block;
`;

export const Section = styled.section<T.SectionProps>`
  display: flex;
  align-items: stretch;
  background: ${(props) => props.$bg || COLOR.white};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  border-radius: ${RADIUS.base};
  background-color: ${COLOR.white};
  padding: 1rem;
`;

export const Image = styled.img<T.ImageProps>`
  border-radius: ${(props) => props.$radius || ""};
  object-fit: ${(props) => props.$fit || "cover"};
  aspect-ratio: ${(props) => props.$ratio || "1 / 1"};
  width: ${(props) => props.$width || "100%"};
  pointer-events: none;
`;
