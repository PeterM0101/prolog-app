import styled from "styled-components";

interface ContainerProps {
  theme?: "dark" | "light";
}

const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme === "dark" ? "grey" : "yellow"};
    height: 100vh;
`;

export default function Home () {
  return (
    <Container theme="dark">Home</Container>
  );
}
