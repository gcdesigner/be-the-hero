import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input } from '@rocketseat/unform';
import * as yup from 'yup';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import * as S from './styles';

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup
		.string()
		.email()
		.required(),
	whatsapp: yup.string(),
	city: yup.string().required(),
	uf: yup.string().required(),
});

export default function Register() {
	const [state, setState] = useState({
		name: '',
		email: '',
		whatsapp: '',
		city: '',
		uf: '',
	});

	const history = useHistory();

	async function handleRegister(data) {
		console.log('data');

		if (!(await schema.isValid(state.name))) {
			return alert('oi');
		}

		try {
			const resp = await api.post('/ongs', data);
			toast.success(`Seu ID de acesso: ${resp.data.id}`);

			history.push('/');
		} catch (err) {
			toast.error(`Erro no cadastro, tente novamente`);
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

					<h1>Cadastro</h1>
					<p>
						Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
						os casos da sua ONG.
					</p>

					<Link className="link" to="/">
						<FiArrowLeft size={16} color="#E02410" />
						Já tenho cadastro
					</Link>
				</S.SectionLeft>

				<S.SectionRight>
					<S.FormCustom onSubmit={handleRegister} schema={schema}>
						<Input
							placeholder="Nome da ONG"
							name="name"
							value={state.name}
							onChange={handleChange}
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email da ONG"
							value={state.email}
							onChange={handleChange}
						/>
						<Input
							type="text"
							name="whatsapp"
							placeholder="Whatsapp"
							value={state.whatsapp}
							onChange={handleChange}
						/>

						<div className="input-group">
							<div>
								<Input
									name="city"
									placeholder="Cidade"
									value={state.city}
									onChange={handleChange}
								/>
							</div>
							<div style={{ width: 100 }}>
								<Input
									name="uf"
									placeholder="UF"
									value={state.uf}
									onChange={handleChange}
								/>
							</div>
						</div>

						<button type="submit" className="btn primary">
							Cadastrar
						</button>
					</S.FormCustom>
				</S.SectionRight>
			</S.Content>
		</S.Container>
	);
}
