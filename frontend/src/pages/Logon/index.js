import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Loading from '../../components/Loading';

import { Container, FormWrapper, Form } from './styles';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
	const [id, setId] = useState('');
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		try {
			const resp = await api.post('/sessions', { id });
			localStorage.setItem('ongId', id);
			localStorage.setItem('ongName', resp.data.name);

			setLoading(false);
			history.push('/profile');
		} catch (err) {
			toast.error('Falha no login, tente novamente.');
			setLoading(false);
		}
	}

	return (
		<Container>
			<FormWrapper>
				<img src={logoImg} alt="Be The Hero" />
				<h1>Faça seu logon</h1>

				<Form onSubmit={handleSubmit}>
					<input
						placeholder="Sua ID"
						name="ong_id"
						value={id}
						onChange={e => setId(e.target.value)}
					/>
					<button className="btn primary" type="submit" disabled={loading}>
						{loading ? <Loading /> : 'Entrar'}
					</button>
				</Form>

				<Link className="link" to="/register">
					<FiLogIn size={16} color="#E02410" />
					Não tenho cadastro
				</Link>
			</FormWrapper>

			<img src={heroesImg} alt="Heroes" />
		</Container>
	);
}
