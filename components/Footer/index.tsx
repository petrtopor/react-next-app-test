/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

export default function Footer(): React.ReactElement {
  const footer: SerializedStyles = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;

  const footerCopyright: SerializedStyles = css`
    margin-left: 60px;
    color: #5a5a5a;
    font-size: 14px;
    line-height: 25px;
  `;

  return (
    <footer css={footer}>
      <span css={footerCopyright}>2021 &copy; Яндекс Go</span>
    </footer>
  );
}
