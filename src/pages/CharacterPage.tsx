import { CharacterDetails, Header } from '../components';
import 'animate.css';

export const CharacterPage = () => {
	return (
		<>
			<Header />
			<div className='animate__animated animate__fadeInDown'>
				<CharacterDetails />
			</div>
		</>
	);
};
