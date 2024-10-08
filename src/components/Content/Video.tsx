import styled, { css } from "styled-components";

type IconProps = {
  size?: "small" | "large";
};

const Wrapper = styled.div<IconProps>`
  ${({ size }) => css`
    ${size === "small"
      ? `scale: 0.6;`
      : size === "large"
      ? `scale: 1.5;`
      : "scale: 0.8;"}
    display: flex;
  `}
`;

export const Video = ({ size }: IconProps) => (
  <Wrapper size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.58993 5.14258C1.15955 5.14258 0 6.30213 0 7.73251V16.7109C0 18.1413 1.15955 19.3009 2.58993 19.3009H13.6403C15.0707 19.3009 16.2302 18.1413 16.2302 16.7109V7.73251C16.2302 6.30213 15.0707 5.14258 13.6403 5.14258H2.58993Z"
        fill="currentColor"
      />
      <path
        d="M24 16.3215V8.16502C24 6.97199 22.7113 6.22396 21.6753 6.81566L17.5252 9.18609V15.3005L21.6753 17.6709C22.7113 18.2626 24 17.5146 24 16.3215Z"
        fill="currentColor"
      />
    </svg>
  </Wrapper>
);
