import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-center p-24">

      <div className='flex absolute top-5'>
        <p className='font-bold text-3xl text-bottom mt-3'>Vis</p>
        <p className='font-bold text-5xl'>IT</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Je suis exposant{' '}
            <Image width={20} height={20} src='/assets/arrow-right-line.png' className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            S'enregistrer, reserver des stands et présenter vos services.
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Je suis visiteur{' '}
            <Image width={20} height={20} src='/assets/arrow-right-line.png' className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            S'enregistrer et visiter des salons selons vos intérets.
          </p>
        </a>
      </div>
    </main>
  )
}
