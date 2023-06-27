import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function Index() {
	const [show, setShow] = useState(false);
	const router = useRouter();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(false);

	const LoginOk = (event) => {
		event.preventDefault();
		if (email == 'kuetefranck@gmail.com' && password == 'KNfs@2205') {
			setLoginError(false);
			setShow(true);
			setTimeout(() => {
				setShow(false);
				router.push('/dashboard');
			}, 2000);
		} else {
			setLoginError(true);
			setTimeout(() => {
				setLoginError(false);
			}, 2000);
		}
		event.preventDefault();
	};
	return (
		<>
			<Header />
			<div className='h-[80vh] bg-gray-100 relative'>
				<div
					className={
						loginError
							? 'absolute right-2 items-center justify-center align-center top-2 bg-red-400 flex p-3 rounded-lg text-white font-bold'
							: 'hidden'
					}>
					<XMarkIcon height={30} />
					<h3>Wrong Credidentials!</h3>
				</div>
				<div className='h-full'>
					<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
						<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
							<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
								Connectez-vous à votre compte
							</h2>
						</div>

						<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
							<form onSubmit={LoginOk} className='space-y-6'>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium leading-6 text-gray-900'>
										Addresse mail
									</label>
									<div className='mt-2'>
										<input
											onChange={(e) => setEmail(e.target.value)}
											defaultValue={email}
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											required
											className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div>
									<div className='flex items-center justify-between'>
										<label
											htmlFor='password'
											className='block text-sm font-medium leading-6 text-gray-900'>
											Mot de passe
										</label>
									</div>
									<div className='mt-2'>
										<input
											onChange={(e) => setPassword(e.target.value)}
											defaultValue={password}
											id='password'
											name='password'
											type='password'
											autoComplete='current-password'
											required
											className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										/>
									</div>
								</div>

								<div>
									<button
										type='submit'
										className='flex w-full justify-center rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
										Connexion
									</button>
								</div>
							</form>

							<p className='mt-10 text-center text-sm text-gray-500'>
								Vous n'avez pas encore de compte?{' '}
								<Link href='/userType'>
									<span className='font-semibold leading-6 text-gray-600 hover:text-indigo-600'>
										Créer en un ici
									</span>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />

			{/* Alert */}
			<div
				aria-live='assertive'
				className='pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6'>
				<div className='flex w-full flex-col items-center space-y-4 sm:items-end'>
					{/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
					<Transition
						show={show}
						as={Fragment}
						enter='transform ease-out duration-300 transition'
						enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
						enterTo='translate-y-0 opacity-100 sm:translate-x-0'
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-green-50 shadow-lg ring-1 ring-black ring-opacity-5'>
							<div className='p-4'>
								<div className='flex items-start'>
									<div className='flex-shrink-0'>
										<CheckCircleIcon
											className='h-6 w-6 text-green-400'
											aria-hidden='true'
										/>
									</div>
									<div className='ml-3 w-0 flex-1 pt-0.5'>
										<p className='text-sm font-medium text-gray-900'>
											Success!
										</p>
										<p className='mt-1 text-sm text-gray-500'>
											Accès autorisé.
										</p>
									</div>
								</div>
							</div>
						</div>
					</Transition>
				</div>
			</div>
		</>
	);
}
