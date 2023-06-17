import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function User() {
	return (
		<>
			<Header />
			<main className='flex relative bg-gray-100 h-[80vh] flex-col items-center justify-center p-24'>
				<div className='gap-5 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left'>
					<Link
						href='/exposant'
						className='mb-5 lg:mb-0 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Je suis exposant{' '}
							<Image
								width={20}
								height={20}
								src='/assets/arrow-right-line.png'
								className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
							/>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							S'enregistrer, reserver des stands et présenter vos services.
						</p>
					</Link>

					<a
						href='#'
						className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Je suis visiteur{' '}
							<Image
								width={20}
								height={20}
								src='/assets/arrow-right-line.png'
								className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'
							/>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							S'enregistrer et visiter des salons selons vos intérets.
						</p>
					</a>
				</div>
			</main>
			<Footer />
		</>
	);
}
