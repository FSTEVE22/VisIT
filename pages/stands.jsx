import { Fragment, useRef, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	EllipsisHorizontalIcon,
	PlusSmallIcon,
} from '@heroicons/react/20/solid';
import {
	BellIcon,
	XMarkIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Footer from '../components/footer';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
	{ name: 'Acceuil', href: '/dashboard' },
	{ name: 'Stands', href: '/stands' },
	{ name: 'Visiteurs', href: '/visiteursDetails' },
];

const Stands = [
	{
		id: 1,
		name: 'Ecole-IT',
		imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
		categorie: 'IT',
	},
	{
		id: 2,
		name: 'Ecole-IT',
		imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
		categorie: 'Marketing',
	},
	{
		id: 3,
		name: 'Ecole-IT',
		imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
		categorie: 'Médécine',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [open, setOpen] = useState(false);
	const [open1, setOpen1] = useState(false);
	const cancelButtonRef = useRef(null);

	return (
		<>
			<div className='min-h-[90vh]'>
				<header className='absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10'>
					<div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
						<div className='flex flex-1 items-center gap-x-6'>
							<button
								type='button'
								className='-m-3 p-3 md:hidden'
								onClick={() => setMobileMenuOpen(true)}>
								<span className='sr-only'>Open main menu</span>
								<Bars3Icon
									className='h-5 w-5 text-gray-900'
									aria-hidden='true'
								/>
							</button>
							<div className='flex items-center justify-center text-gray-500'>
								<p className='font-bold text-3xl text-bottom mt-3'>Vis</p>
								<p className='font-bold text-5xl'>IT</p>
							</div>
						</div>
						<nav className='hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700'>
							{navigation.map((item, itemIdx) => (
								<Link key={itemIdx} href={item.href}>
									{item.name}
								</Link>
							))}
						</nav>
						<div className='flex flex-1 items-center justify-end gap-x-8'>
							<button
								type='button'
								className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'>
								<span className='sr-only'>View notifications</span>
								<BellIcon className='h-6 w-6' aria-hidden='true' />
							</button>
							<button
								onClick={() => setOpen1(true)}
								className='bg-gray-500 rounded-md -m-2.5 p-2 text-white hover:bg-red-500'>
								<span className='sr-only'>Deconnexion</span>
								<Image height={20} width={20} src='/assets/exit.png' />
							</button>
						</div>
					</div>
					<Dialog
						as='div'
						className='lg:hidden'
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}>
						<div className='fixed inset-0 z-50' />
						<Dialog.Panel className='fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10'>
							<div className='-ml-0.5 flex h-16 items-center gap-x-6'>
								<button
									type='button'
									className='-m-2.5 p-2.5 text-gray-700'
									onClick={() => setMobileMenuOpen(false)}>
									<span className='sr-only'>Close menu</span>
									<XMarkIcon className='h-6 w-6' aria-hidden='true' />
								</button>
								<div className='-ml-0.5'>
									<a href='#' className='-m-1.5 block p-1.5'>
										<span className='sr-only'>Your Company</span>
										<div className='flex items-center justify-center text-gray-500'>
											<p className='font-bold text-3xl text-bottom mt-3'>Vis</p>
											<p className='font-bold text-5xl'>IT</p>
										</div>
									</a>
								</div>
							</div>
							<div className='mt-2 space-y-2'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										{item.name}
									</a>
								))}
							</div>
						</Dialog.Panel>
					</Dialog>
				</header>

				<main>
					<div className='relative isolate overflow-hidden pt-16'>
						{/* Secondary navigation */}
						<header className='pb-4 pt-6 sm:pb-6'>
							<div className='mx-auto items-center flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8'>
								<h1 className='text-base font-semibold leading-7 text-gray-900'>
									Stands
								</h1>
								<span
									onClick={() => setOpen(true)}
									className='cursor-pointer ml-auto flex items-center gap-x-1 rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									<PlusSmallIcon
										className='-ml-1.5 h-5 w-5'
										aria-hidden='true'
									/>
									Nouveau stand
								</span>
							</div>
						</header>
					</div>

					<div className='space-y-16 pb-16 xl:space-y-20'>
						{/* Stands*/}
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
								<ul
									role='list'
									className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'>
									{Stands.map((client) => (
										<li
											key={client.id}
											className='overflow-hidden rounded-xl border border-gray-200'>
											<div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
												<img
													src={client.imageUrl}
													alt={client.name}
													className='h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10'
												/>
												<div className='text-sm font-medium leading-6 text-gray-900'>
													{client.name}
												</div>
												<Menu as='div' className='relative ml-auto'>
													<Menu.Button className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
														<span className='sr-only'>Open options</span>
														<EllipsisHorizontalIcon
															className='h-5 w-5'
															aria-hidden='true'
														/>
													</Menu.Button>
													<Transition
														as={Fragment}
														enter='transition ease-out duration-100'
														enterFrom='transform opacity-0 scale-95'
														enterTo='transform opacity-100 scale-100'
														leave='transition ease-in duration-75'
														leaveFrom='transform opacity-100 scale-100'
														leaveTo='transform opacity-0 scale-95'>
														<Menu.Items className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
															<Menu.Item>
																{({ active }) => (
																	<a
																		href='#'
																		className={classNames(
																			active ? 'bg-gray-50' : '',
																			'block px-3 py-1 text-sm leading-6 text-gray-900'
																		)}>
																		View
																		<span className='sr-only'>
																			, {client.name}
																		</span>
																	</a>
																)}
															</Menu.Item>
															<Menu.Item>
																{({ active }) => (
																	<a
																		href='#'
																		className={classNames(
																			active ? 'bg-gray-50' : '',
																			'block px-3 py-1 text-sm leading-6 text-gray-900'
																		)}>
																		Edit
																		<span className='sr-only'>
																			, {client.name}
																		</span>
																	</a>
																)}
															</Menu.Item>
														</Menu.Items>
													</Transition>
												</Menu>
											</div>
											<dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
												<div className='flex justify-between gap-x-4 py-3'>
													<dt className='text-gray-500'>Catégorie</dt>
													<dd className='flex items-start gap-x-2'>
														<div className='font-medium text-gray-900'>
															{client.categorie}
														</div>
													</dd>
												</div>
											</dl>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</main>
			</div>

			<Footer />

			{/* Modal */}
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-10'
					initialFocus={cancelButtonRef}
					onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
								<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
									<div className=''>
										<div className=''>
											<label
												htmlFor='email'
												className='block text-sm font-medium leading-6 text-gray-900'>
												Catégorie du stand
											</label>
											<div className='mt-2'>
												<input
													id='name'
													name='name'
													type='text'
													autoComplete='name'
													className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
													placeholder='( ex: IT, marketing, medicine etc… )'
												/>
											</div>
										</div>
										<div className='mt-4'>
											<label
												htmlFor='email'
												className='block text-sm font-medium leading-6 text-gray-900'>
												Image de roll-up
											</label>
											<div className='mt-2'>
												<input
													multiple
													id='name'
													name='name'
													type='file'
													autoComplete='name'
													className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
												/>
											</div>
										</div>
										<div className='mt-4'>
											<label
												htmlFor='tables'
												className='block text-sm font-medium leading-6 text-gray-900'>
												Nombre de tables
											</label>
											<div className='mt-2'>
												<select
													id='tables'
													name='tables'
													className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'>
													<option>1</option>
													<option>2</option>
													<option>3</option>
												</select>
											</div>
										</div>
									</div>
									<div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
										<button
											type='button'
											className='inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2'
											onClick={() => setOpen(false)}>
											Sauvegarder
										</button>
										<button
											type='button'
											className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0'
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Modal */}
			<Transition.Root show={open1} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={setOpen1}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 z-10 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
								enterTo='opacity-100 translate-y-0 sm:scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 translate-y-0 sm:scale-100'
								leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
								<Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'>
									<div className='sm:flex sm:items-start'>
										<div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
											<ExclamationTriangleIcon
												className='h-6 w-6 text-red-600'
												aria-hidden='true'
											/>
										</div>
										<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
											<Dialog.Title
												as='h3'
												className='text-base font-semibold leading-6 text-gray-900'>
												Deconnectez-vous
											</Dialog.Title>
											<div className='mt-2'>
												<p className='text-sm text-gray-500'>
													Etes-vous sure de vouloir vous deconnectez de votre
													compte ?
												</p>
											</div>
										</div>
									</div>
									<div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
										<Link
											href='/'
											className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'>
											Deconnexion
										</Link>
										<button
											type='button'
											className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
											onClick={() => setOpen1(false)}>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
