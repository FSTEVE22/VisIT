
import Header from '../components/header';
import Footer from '../components/footer';

export default function Exposant() {
	return (
		<div>
			<Header />
			<form className='p-10 bg-gray-100'>
				<div className='space-y-12'>
					<div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
						<div>
							<h2 className='text-base font-semibold leading-7 text-gray-900'>
								Profil
							</h2>
							<p className='mt-1 text-sm leading-6 text-gray-600'>
								Ces informations seront affichées publiquement, soyez donc
								prudent dans ce que vous partagez.
							</p>
						</div>

						<div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
							<div className='sm:col-span-4'>
								<label
									htmlFor='website'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Site web
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='website'
										id='website'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
										placeholder='www.example.com'
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
						<div>
							<h2 className='text-base font-semibold leading-7 text-gray-900'>
								Informations personnelles
							</h2>
							<p className='mt-1 text-sm leading-6 text-gray-600'>
								Utilisez une adresse permanente où vous pouvez recevoir du
								courrier.
							</p>
						</div>

						<div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
							<div className='col-span-4'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Nom de l'exposant
								</label>
								<div className='mt-2'>
									<input
										id='name'
										name='name'
										type='text'
										autoComplete='name'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='col-span-4'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Addresse mail
								</label>
								<div className='mt-2'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='col-span-4'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Numéro de telephone
								</label>
								<div className='mt-2'>
									<input
										id='phone'
										name='phone'
										type='number'
										autoComplete='phone'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-4 lg:col-span-3'>
								<label
									htmlFor='country'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Pays
								</label>
								<div className='mt-2'>
									<select
										id='country'
										name='country'
										autoComplete='country-name'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6'>
										<option></option>
                                        <option>Belgique</option>
										<option>France</option>
									</select>
								</div>
							</div>

                            <div className='col-span-4 lg:col-span-3'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Numéro de TVA
								</label>
								<div className='mt-2'>
									<input
										id='tva'
										name='tva'
										type='number'
										autoComplete='tva'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-4 lg:col-span-2'>
								<label
									htmlFor='street-address'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Rue
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='street-address'
										id='street-address'
										autoComplete='street-address'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-4 lg:col-span-2'>
								<label
									htmlFor='city'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Ville
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='city'
										id='city'
										autoComplete='address-level2'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='col-span-4 lg:col-span-2'>
								<label
									htmlFor='postal-code'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Code postal
								</label>
								<div className='mt-2'>
									<input
										type='text'
										name='postal-code'
										id='postal-code'
										autoComplete='postal-code'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
						</div>
					</div>
                    <div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3'>
						<div>
							<h2 className='text-base font-semibold leading-7 text-gray-900'>
								Sécurité
							</h2>
							<p className='mt-1 text-sm leading-6 text-gray-600'>
								Choissisez un mot de passe solide pour une sécurité optimale de votre compte
							</p>
						</div>

						<div className='grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2'>
							<div className='sm:col-span-4'>
								<label
									htmlFor='website'
									className='block text-sm font-medium leading-6 text-gray-900'>
									Mot de passe
								</label>
								<div className='mt-2'>
									<input
										type='password'
										name='password'
										id='password'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'
										placeholder='*******************'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button
						type='submit'
						className='rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Sauvegarder
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
}
