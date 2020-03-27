import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const Container = styled.div`
	width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	align-items: center;
	align-content: center;
`;

export const Content = styled.div`
	width: 100%;
	padding: 96px;
	background: #f0f0f5;
	box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
	border-radius: 8px;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SectionLeft = styled.section`
	width: 100%;
	max-width: 380px;

	h1 {
		margin: 64px 0 32px;
		font-size: 32px;
	}

	p {
		font-size: 18px;
		color: #737380;
		line-height: 32px;
		margin-bottom: 32px;
	}
`;

export const SectionRight = styled.section``;

export const FormCustom = styled(Form)`
	width: 100%;
	max-width: 450px;

	input {
		margin-bottom: 8px;
	}

	.input-group {
		display: flex;

		div {
			width: 100%;

			input & {
				background: red;
			}

			+ div {
				margin-left: 8px;
			}
		}
	}

	button {
		margin-top: 8px;
	}
`;
