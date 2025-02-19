import { useTranslation } from 'react-i18next'

export default function Landing() {
  const { t } = useTranslation('landing')
  return (
    <div className='relative flex w-full h-screen overflow-hidden antialiased rounded-md md:items-center md:justify-center'>
      <div className='relative z-10 w-full p-4 pt-20 mx-auto max-w-7xl md:pt-0'>
        <h1 className='text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500'>
          {t('homepage.title')} <br /> BRANCH COMPANY
        </h1>
        <p className='max-w-lg mx-auto mt-4 text-base font-normal text-center text-neutral-300'>
          A subtle yet effective spotlight effect, because the previous version is used a bit too much these days.
        </p>
      </div>
    </div>
  )
}
