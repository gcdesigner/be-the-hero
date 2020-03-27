import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import Header from '../../components/Header';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Loading from '../../components/Loading';

import * as S from './styles';

export default function Profile() {
	const ongId = localStorage.getItem('ongId');

	const [incidents, setIncidents] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getIncidents() {
			setLoading(true);
			const resp = await api.get('profile', {
				headers: {
					Authorization: ongId,
				},
			});

			setIncidents(resp.data);
			setLoading(false);
		}

		getIncidents();
	}, [ongId]);

	function numberFormat(number) {
		const format = Intl.NumberFormat('pt-br', {
			style: 'currency',
			currency: 'BRL',
		}).format(number);

		return format;
	}

	async function handleDelete(id) {
		setLoading(true);
		try {
			await api.delete(`/incidents/${id}`, {
				headers: {
					Authorization: ongId,
				},
			});
			const updatedList = incidents.filter(i => i.id !== id);
			setIncidents(updatedList);
			setLoading(false);

			toast.success(`Caso ${id} deletado com sucesso.`);
		} catch (error) {
			toast.error('Erro ao tentar deletar caso, tente novamente');
			setLoading(false);
		}
	}

	return (
		<>
			<Header />
			<S.Container>
				<h1>Cassos cadastrados</h1>

				{loading && (
					<div className="backdrop">
						<Loading size={50} color="#e02041" />
					</div>
				)}

				<S.List>
					{incidents.map(incident => (
						<S.Item key={incident.id}>
							<strong>CASO ({incident.id}):</strong>
							<p>{incident.title}</p>

							<strong>DESCRIÇÃO:</strong>
							<p>{incident.description}</p>

							<strong>VALOR:</strong>
							<p>{numberFormat(incident.value)}</p>

							<button type="button" onClick={() => handleDelete(incident.id)}>
								<FiTrash2 size={20} color="#a8a8b3" />
							</button>
						</S.Item>
					))}
				</S.List>
			</S.Container>
		</>
	);
}
