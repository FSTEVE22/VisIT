import Header from '../components/header';
import Footer from '../components/footer';

export default function Example() {
	return (
		<div>
			<Header />
			<form className='p-10 bg-gray-100'>
				<div className='space-y-12 sm:space-y-16'>
					<div>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Informations personnelles
						</h2>
						<p className='mt-1 max-w-2xl text-sm leading-6 text-gray-600'>
							Utilisez une adresse permanente où vous pouvez recevoir du
							courrier.
						</p>

						<div className='mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='first-name'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Nom
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										type='text'
										name='first-name'
										id='first-name'
										autoComplete='given-name'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='last-name'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Prénom
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										type='text'
										name='last-name'
										id='last-name'
										autoComplete='family-name'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='phone'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Numéro de telephone
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										id='phone'
										name='phone'
										type='number'
										autoComplete='phone'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='email'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Addresse Mail
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										id='email'
										name='email'
										type='email'
										autoComplete='email'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-md sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='country'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Pays
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<select
										id='country'
										name='country'
										autoComplete='country-name'
										className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6'>
										<option></option>
										<option>Belgique</option>
										<option>France</option>
									</select>
								</div>
							</div>

							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='city'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Ville
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										type='text'
										name='city'
										id='city'
										autoComplete='address-level2'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='postal-code'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Code ZIP / Postal
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										type='text'
										name='postal-code'
										id='postal-code'
										autoComplete='postal-code'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-xs sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
								<label
									htmlFor='interest'
									className='block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5'>
									Intérêts
								</label>
								<div className='mt-2 sm:col-span-2 sm:mt-0'>
									<input
										type='text'
										name='interest'
										id='interest'
										autoComplete='interest'
										placeholder='( ex: IT, marketing, medicine etc… )'
										className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:max-w-md sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 pt-12 md:grid-cols-3'>
					<div>
						<h2 className='text-base font-semibold leading-7 text-gray-900'>
							Sécurité
						</h2>
						<p className='mt-1 text-sm leading-6 text-gray-600'>
							Choissisez un mot de passe solide pour une sécurité optimale de
							votre compte
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
				<div className='mt-6 flex items-center justify-end gap-x-6'>
					<button
						type='submit'
						className='inline-flex justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
						Sauvegarder
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
}
