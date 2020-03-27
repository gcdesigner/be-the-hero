import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html, body, #root {
      min-height: 100vh;
      overflow-x: hidden;
  }

  body {
      background: #f0f0f5;
      -webkit-font-smoothing: antialiased !important;
      color: #484848;
      line-height: 1.43;
      font-size: 14px;
      font-family: Roboto;
  }

  input, textarea, button {
    font: 400 18px Roboto, sans-serif;
  }

  input, textarea {
    width: 100%;
		height: 60px;
		border-radius: 8px;
		border: 1px solid #ddd;
		padding: 0 24px;
  }

  textarea {
    min-height: 140px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
  }

  .btn {
      width: 100%;
      height: 60px;
      background: transparent;
      border: 0;
      border-radius: 8px;
      background: #fff;
      color: #333;
      cursor: pointer;
      font-size: 18px;
      font-weight: 700;
      padding: 10px 10px;
      transition: all .5s;

      display: flex;
      align-items: center;
      justify-content: center;

      &.primary {
		    background: #e02041;
        color: #fff;
      }

      &:disabled {
        opacity: .5;
        cursor: not-allowed;
      }

      &:hover {
        filter: brightness(90%);
      }
  }

  a, button {
    cursor: pointer;
  }

  .link {
		display: flex;
		align-items: center;
		color: #41414d;
		font-size: 18px;
		font-weight: 500;
		transition: opacity 0.2s;

		svg {
			margin-right: 10px;
		}

		&:hover {
			opacity: 0.8;
		}
	}

  .backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(255,255,255,.5);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
