/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import Link from "next/link";

export default function Header(): React.ReactElement {
  const header: SerializedStyles = css`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #ffffff;
    border-bottom: 1px solid #c4c4c4;
  `;

  const headerLogo: SerializedStyles = css`
    margin: 25px 30px;
    font-size: 22px;
    font-weight: 700;
    min-width: max-content;
  `;

  const headerLink: SerializedStyles = css`
    margin: 25px 30px;
    font-size: 15px;
    cursor: pointer;
  `;

  const serviceName: SerializedStyles = css`
    display: inline-block;
    margin-right: 10px;
    padding: 5px;
    background-color: #000;
    color: #fff;
    border-radius: 36%;
    font-weight: 400;
  `;

  const headerMenu: SerializedStyles = css`
    display: flex;
  `;

  return (
    <header css={header}>
      <div css={headerLogo}>
        <Link href="/">
          <a>
            Яндекс <span css={serviceName}>Go</span>
            <span
              css={css`
                font-weight: 400;
              `}
            >
              Dev
            </span>
          </a>
        </Link>
      </div>
      <nav>
        <ul css={headerMenu}>
          <li>
            <Link href="/">
              <a css={headerLink}>Вакансии</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
