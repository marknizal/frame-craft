import styled from "styled-components";
import { Container, Card as C } from "../../components/shared";
import { FONTSIZE, RADIUS, COLOR, BREAKPOINT } from "../../styles";

import Image1 from "../../assets/image-1.jpeg";

const GRADIENT = {
  fade: `
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0)
    ) top / 100% 70% no-repeat
  `,

  task: `
    radial-gradient(
      50% 84% at 73.4% 53.7%,
      rgb(255, 255, 255) 0%,
      rgb(223, 227, 191) 100%
    )
  `,

  tracking: `
    radial-gradient(
      80% 71% at 75.3% 64.1%,
      rgb(199, 229, 174) 0%,
      rgb(97, 155, 49) 100%
    )
  `,
};

export const Wrapper = styled(Container)`
  display: grid;
  align-items: stretch;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 4rem 1rem;

  ${BREAKPOINT.desktop} {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .grid-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    ${BREAKPOINT.mobile} {
      grid-template-columns: 1fr;
    }
  }
`;

export const Card = styled(C)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: ${RADIUS.lg};
  padding: 1.5rem;

  h1 {
    font-size: calc(${FONTSIZE.xl} + 0.5rem);
    font-weight: 500;
  }

  p {
    font-size: ${FONTSIZE.base};
    line-height: 1.5rem;
  }

  &.task {
    background: ${GRADIENT.task};
    position: relative;
    padding-bottom: 12rem;

    ${BREAKPOINT.mobile} {
      padding-bottom: 18rem;
    }
  }

  &.tracking {
    background: ${GRADIENT.tracking};
    color: ${COLOR.white};
    position: relative;
  }
`;

export const Right = styled(Card)`
  background: ${GRADIENT.fade}, url(${Image1}) center / cover no-repeat;
  height: 100%;

  ${BREAKPOINT.tablet} {
    aspect-ratio: 16 / 9;
  }

  ${BREAKPOINT.mobile} {
    aspect-ratio: 9 / 16;
  }
`;

export const Hero = styled.img`
  position: absolute;
  width: 30rem;
  aspect-ratio: auto;
  object-fit: contain;
  z-index: 1;

  bottom: -1rem;
  right: -0.5rem;

  ${BREAKPOINT.desktop} {
    top: -2rem;
    right: -1rem;
  }
`;

export const Frame = styled.img`
  aspect-ratio: 4 / 3;
  border-radius: ${RADIUS.lg};
  object-fit: cover;
  margin-top: auto;

  ${BREAKPOINT.mobile} {
    aspect-ratio: 1 / 1;
  }
`;

export const Mockup = styled.img`
  position: absolute;
  margin-top: auto;
  bottom: -1rem;
  left: 50%;
  width: 90%;
  aspect-ratio: 4 / 3;
  object-fit: contain;

  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.35));
  transform: translateX(-50%) rotate(-5deg);

  ${BREAKPOINT.mobile} {
    position: static;
    width: 100%;
    transform: rotate(-5deg);
  }
`;
