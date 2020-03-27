import React from 'react';
import { FiLoader } from 'react-icons/fi';

import * as S from './styles';

export default function Loading({ size = 30, color = '#fff' }) {
	return (
		<S.Container>
			<FiLoader size={size} color={color} />
		</S.Container>
	);
}
