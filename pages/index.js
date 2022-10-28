import Head from "next/head";
// import Image from "next/legacy/image";
// import Image from "next/image";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Head>
        <title>Dein Fische Shop</title>
      </Head>
      {/* <Background>
        <Image
          src="https://unsplash.com/photos/9y7y26C-l4Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5MjcwNjYw&force=true&w=2400"
          alt="Schöne Fische"
          layout="responsive"
          width={2400}
          height={1800}
        />
      </Background> */}
      <h1>Your Fish Shop</h1>
      <p>Login to Fish shop</p>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;

  @media (max-width: 600px) {
    display: none;
  }
`;

export default Home