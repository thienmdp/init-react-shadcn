import { useState, useEffect, useCallback } from 'react'
import { MobileMenu } from './MobileMenu'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import { useAppSelector } from '@/redux/store'
import CardUser from '../../CardUser'
import path from '@/constants/path'
import { ModalSearch } from '../../Modal'
import SearchHeader from './SearchHeader'

const Container = styled.div`
  .ant-drawer .antd-drawer-content-wrapper .antd-drawer-content .ant-drawer-body {
    padding: 0px !important;
  }
`

export const Header = () => {
  // const { i18n, t } = useTranslation('landing')
  const [scrollActive, setScrollActive] = useState(false)
  const user = useAppSelector((auth) => auth.authState.user)

  useEffect(() => {
    localStorage.setItem('preferredTheme', 'light')
  }, [])

  const handleScroll = useCallback(() => {
    setScrollActive(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleScrollToTop = useCallback(() => {
    scroll.scrollToTop({ duration: 300, smooth: true })
  }, [])

  return (
    <header
      className={
        'fixed top-0 z-50 shadow-md w-full border-b-1 transition-all duration-250 ease-out' +
        (scrollActive ? ' pt-0 shadow-sm' : '')
      }
    >
      <nav className='bg-white border-gray-200'>
        <Container className='flex items-center justify-between px-6 py-4 mx-auto containerr max-w-screen-xl min-h-[70px]'>
          <div className='flex justify-between items-center w-full md:justify-start'>
            <MobileMenu />
            <Link
              to={path.landing}
              aria-label='logo_home'
              className='flex items-center mr-4'
              onClick={() => handleScrollToTop}
            >
              <img src='/assets/svg/diagnosisiq.svg' height={120} width={120} alt='logo' />
            </Link>
            <ModalSearch />
            <SearchHeader />
          </div>
          <div className='flex justify-end items-center text-sm'>
            {/* I18N */}
            {/* <Popover
              content={
                <>
                  <div
                    onClick={() => i18n.changeLanguage('en')}
                    className='block py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                  >
                    <div className='inline-flex justify-center items-center w-full'>
                      <img src='/assets/svg/icon_English.svg' alt='logo' width={24} height={24} className='mr-2' />
                      <p className='min-w-[65px]'>English</p>
                    </div>
                  </div>
                  <div
                    onClick={() => i18n.changeLanguage('vi')}
                    className='block py-1 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                  >
                    <div className='inline-flex justify-center items-center w-full'>
                      <img src='/assets/svg/icon_Vietnam.svg' alt='logo' width={24} height={24} className='mr-2' />
                      <p className='min-w-[65px]'>Tiếng Việt</p>
                    </div>
                  </div>
                </>
              }
              // title='Title'
              trigger='hover'
            >
              <div className='relative p-2 mr-5 rounded-full transition duration-300 ease-in-out delay-150 cursor-pointer hover:bg-gray-200 hover:-translate-y-1 hover:scale-110'>
                {i18n.language === 'vi' ? (
                  <img src='/assets/svg/icon_Vietnam.svg' alt='logo' width={24} height={24} />
                ) : (
                  <img src='/assets/svg/icon_English.svg' alt='logo' width={24} height={24} />
                )}
              </div>
            </Popover> */}
            <ul className='hidden w-max md:flex'>
              <li>
                <Link
                  className='mr-4 text-gray-700 cursor-pointer hover:text-blue_app'
                  to={path.about}
                  onClick={() => handleScrollToTop}
                  aria-current='page'
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  className='mr-4 text-gray-700 cursor-pointer hover:text-blue_app'
                  to={path.landing}
                  onClick={() => handleScrollToTop}
                  aria-current='page'
                >
                  Tin tức
                </Link>
              </li>
            </ul>
            <span className='hidden w-max md:block'>
              {user && <CardUser />}
              {!user && (
                <div className='flex items-center w-max'>
                  <Link
                    className='flex justify-center items-center p-2 font-bold rounded-md border cursor-pointer text-blue_app border-blue_app hover:text-blue_app hover:bg-blue_app/10'
                    to={path.signin}
                    onClick={() => handleScrollToTop}
                  >
                    Đăng nhập
                  </Link>
                </div>
              )}
            </span>
          </div>
        </Container>
      </nav>
    </header>
  )
}
