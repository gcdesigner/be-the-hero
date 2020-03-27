import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1180px;
	margin: 0 auto;
	padding: 0 30px 30px;

	h1 {
		margin-top: 80px;
		margin-bottom: 24px;
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 24px;
`;

export const Item = styled.li`
	position: relative;
	background: #fff;
	padding: 24px;
	border-radius: 8px;

	strong {
		display: block;
		margin-bottom: 16px;
		color: #41414d;
	}

	p {
		color: #737380;
		line-height: 21px;

		& + strong {
			margin-top: 32px;
		}
	}

	button {
		position: absolute;
		right: 24px;
		top: 24px;
		border: 0;
		background: #fff;
		transition: opacity 0.2s;

		&:hover {
			opacity: 0.7;
		}
	}
`;
