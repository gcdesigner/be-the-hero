import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import * as S from './styles';

import logoImg from '../../assets/logo.svg';

export default function Header({ title }) {
	const ongName = localStorage.getItem('ongName');
	const history = useHistory();

	function handleLogout() {
		localStorage.clear();
		history.push('/');
	}

	return (
		<S.Container>
			<S.Header>
				<img src={logoImg} alt="Be The Hero" />
				<span>Bem vinda, {ongName}</span>

				<Link className="btn primary" to="/incidents/new">
					Cadastrar novo caso
				</Link>
				<button type="button" onClick={handleLogout}>
					<FiPower size={18} color="#E02041" />
				</button>
			</S.Header>
		</S.Container>
	);
}
