/** @jsxImportSource @emotion/react */
import Header from "../Header";
import Footer from "../Footer";

import { css, SerializedStyles } from "@emotion/react";

export default function Layout({ children }: any) {
  const main: SerializedStyles = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const container: SerializedStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  return (
    <div css={container}>
      <Header />

      <main css={main}>{children}</main>

      <Footer />
    </div>
  );
}
