import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const FormWrapper = styled.div`
	width: 100%;
	max-width: 350px;
	margin-right: 50px;

	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 32px;
		margin-top: 100px;
		margin-bottom: 32px;
	}
`;

export const Form = styled.form`
	margin-bottom: 40px;

	input {
		margin-bottom: 10px;
	}

	button {
		width: 100%;
	}
`;
