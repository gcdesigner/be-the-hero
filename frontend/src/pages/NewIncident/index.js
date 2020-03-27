import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

export default function NewIncident() {
	const ongId = localStorage.getItem('ongId');
	const history = useHistory();

	const [state, setState] = useState({
		title: '',
		description: '',
		value: '',
	});

	function handleSubmit(e) {
		e.preventDefault();

		const data = {
			title: state.title,
			description: state.description,
			value: state.value,
		};

		try {
			api.post('/incidents', data, {
				headers: {
					Authorization: ongId,
				},
			});
			toast.success('Sucesso', 'Caso cadastrado com sucesso.');

			history.push('/profile');
		} catch (error) {
			toast.error('Error', 'Erro ao cadastrar caso, tente novamente.');
		}
	}

	function handleChange(e) {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	}

	return (
		<S.Container>
			<S.Content>
				<S.SectionLeft>
					<img src={logoImg} alt="Be The Hero" />

					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um herói para resolver
						isso.
					</p>

					<Link className="link" to="/profile">
						<FiArrowLeft size={16} color="#E02410" />
						Voltar para home
					</Link>
				</S.SectionLeft>

				<S.SectionRight>
					<S.Form onSubmit={handleSubmit}>
						<input
							name="title"
							placeholder="Título do caso"
							value={state.title}
							onChange={handleChange}
						/>
						<textarea
							name="description"
							placeholder="Descrição"
							value={state.description}
							onChange={handleChange}
						/>

						<input
							name="value"
							placeholder="Valor em reais"
							value={state.value}
							onChange={handleChange}
						/>

						<button type="submit" className="btn primary">
							Cadastrar
						</button>
					</S.Form>
				</S.SectionRight>
			</S.Content>
		</S.Container>
	);
}
