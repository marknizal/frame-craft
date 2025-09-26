import styled from "styled-components";
import { BREAKPOINT, COLOR, FONTSIZE, RADIUS } from "../../styles";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  color: ${COLOR.white};

  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
    pointer-events: none;
  }

  .subtitle {
    font-size: calc(${FONTSIZE.xl} + 0.5rem);
  }

  .title {
    font-size: calc(${FONTSIZE.xl} + 4rem);
    line-height: 6rem;
    font-weight: 800;
  }

  .description {
    font-size: ${FONTSIZE.md};
    color: ${COLOR.grey10};
  }

  ${BREAKPOINT.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${BREAKPOINT.mobile} {
    padding: 2rem 1rem;

    .subtitle {
      font-size: ${FONTSIZE.lg};
    }

    .title {
      font-size: calc(${FONTSIZE.xl} + 1rem);
      line-height: 3rem;
    }

    .description {
      font-size: ${FONTSIZE.base};
    }
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1;

  ${BREAKPOINT.desktop} {
    max-width: 45%;
  }
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1;

  padding: 0.5rem;
  padding-right: 1rem;
  border: none;
  border-radius: ${RADIUS.lg};
  font-size: ${FONTSIZE.base};
  background-color: ${COLOR.dark};
  color: ${COLOR.white};

  cursor: pointer;

  ${BREAKPOINT.desktop} {
    width: auto;
  }
`;
