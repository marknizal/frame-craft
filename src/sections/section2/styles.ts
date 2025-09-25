import styled from "styled-components";
import { Container } from "../../components/shared";
import { BREAKPOINT, COLOR, FONTSIZE, RADIUS } from "../../styles";

const CARDBASE = `
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: calc(${RADIUS.base} + 0.5rem);
  padding: 1rem;

  h1 {
    font-size: ${FONTSIZE.xl};
  }

  p {
    font-size: ${FONTSIZE.base};
    text-align: center;
  }

  ${BREAKPOINT.mobile} {
    grid-column: 1 / -1;
    padding: 4rem 1rem;
  }
`;

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;

  ${BREAKPOINT.desktop} {
    grid-template-columns: 1.5fr 2fr;
  }
`;

export const Left = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: calc(${FONTSIZE.xl} + 2rem);
    font-weight: 700;
    line-height: 4rem;
  }

  h2 {
    font-size: ${FONTSIZE.xl};
    font-weight: 500;
  }

  p {
    font-size: ${FONTSIZE.base};
    line-height: 1.5rem;
  }

  button {
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.5rem;
    cursor: pointer;
    padding: 0.35rem;
    border: 1px solid ${COLOR.transparent};
    border-radius: ${RADIUS.lg};

    background-color: ${COLOR.primary};
    color: ${COLOR.white};
    transition: all 0.2s ease;

    span {
      padding: 0 1rem;
      font-size: ${FONTSIZE.base};
    }

    svg {
      padding: 0.4rem;
      font-size: calc(${FONTSIZE.md} + 1rem);
      background-color: ${COLOR.white};
      color: ${COLOR.primary};
      border-radius: ${RADIUS.full};
    }

    &:hover {
      border: 1px solid ${COLOR.primary};
      background-color: ${COLOR.white};
      color: ${COLOR.primary};

      svg {
        background-color: ${COLOR.primary};
        color: ${COLOR.white};
      }
    }
  }
`;

export const Right = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.65rem;

  ${BREAKPOINT.mobile} {
    grid-template-columns: repeat(2, 1fr);

    figure:last-of-type {
      grid-column: 1 / -1;
      aspect-ratio: 16 / 10;
    }
  }
`;

export const Teamwork = styled.div`
  background-color: #ebebeb;
  ${CARDBASE}

  .action {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem;
    padding-right: 1rem;
    background-color: ${COLOR.black};
    color: ${COLOR.white};
    border-radius: ${RADIUS.lg};

    button {
      border: none;
      padding: 0.4rem 0.5rem;
      background-color: ${COLOR.white};
      border-radius: ${RADIUS.lg};
      cursor: pointer;
    }

    span {
      font-size: ${FONTSIZE.sm};
    }
  }
`;

export const Completion = styled.div`
  background-color: #e6f2ff;
  ${CARDBASE}
`;

export const Profile = styled.figure`
  aspect-ratio: 1 / 1.1;
  border-radius: calc(${RADIUS.base} + 0.5rem);
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;
