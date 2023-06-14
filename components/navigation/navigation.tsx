import Link from 'next/link';
import PaddingContainer from '../layout/padding-container';

const navigation = () => {
	return (
		<div className='sticky border-b top-0 left-0 right-0 bg-white bg-opacity-50 backdrop-blur-md'>
			<PaddingContainer>
				<div className='py-5 flex items-center justify-between '>
					<Link
						href='/'
						className='text-lg font-bold'
					>
						Explorer
					</Link>
					{/* Category Links */}
					<nav>
						<ul className='flex items-center gap-4 text-neutral-600'>
							<li>
								<Link href='/cities'>Cities</Link>
							</li>
							<li>
								<Link href='/experiences'>Experiences</Link>
							</li>
						</ul>
					</nav>
				</div>
			</PaddingContainer>
		</div>
	);
};

export default navigation;
