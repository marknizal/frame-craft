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
    ) top / 100% 50% no-repeat
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
  grid-template-columns: 2fr 1fr;
  gap: 1.25rem;
  align-items: stretch;
  padding: 4rem 1rem;

  ${BREAKPOINT.tablet} {
    grid-template-columns: 1fr;
  }

  ${BREAKPOINT.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .grid {
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
    aspect-ratio: 2 / 1;
  }

  &.workflows {
    aspect-ratio: 1 / 1;
  }

  &.workflows img {
    margin-top: auto;
  }

  &.tracking {
    aspect-ratio: 1 / 1;
    background: ${GRADIENT.tracking};
    color: ${COLOR.white};
    position: relative;
  }

  ${BREAKPOINT.mobile} {
    &.task {
      aspect-ratio: 3 / 4;
    }

    &.workflows {
      aspect-ratio: 3 / 4;
    }

    &.workflows img {
      aspect-ratio: 4 / 3;
    }

    &.tracking {
      aspect-ratio: 3 / 4;
    }
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
  width: 32rem;
  position: absolute;
  aspect-ratio: auto;
  object-fit: contain;
  top: -1.5rem;
  right: -1rem;
  z-index: 1;

  ${BREAKPOINT.tablet} {
    top: auto;
    bottom: -1rem;
    right: -0.5rem;
  }

  ${BREAKPOINT.mobile} {
    top: auto;
    bottom: -1rem;
    right: -0.5rem;
  }
`;

export const Mockup = styled.img`
  width: 20rem;
  object-fit: contain;
  position: absolute;
  aspect-ratio: 4 / 3;
  bottom: -1rem;
  left: 50%;
  filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.35));
  transform: translateX(-50%) rotate(-5deg);

  ${BREAKPOINT.mobile} {
    position: static;
    transform: none;
    margin-top: auto;
    width: 100%;
  }
`;

export const Frame = styled.img`
  aspect-ratio: 16 / 9;
  border-radius: ${RADIUS.base};
  object-fit: cover;
`;
