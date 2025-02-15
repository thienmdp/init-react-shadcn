import path from '@/constants/path'
import { Globe, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-3 py-10 mx-auto max-w-md sm:grid-cols-3 lg:grid-cols-4 md:gap-12 sm:max-w-3xl lg:max-w-full'>
          <div className='col-span-full mb-10 lg:col-span-2 lg:mb-0'>
            <div>
              <img
                src='/assets/svg/diagnosisiq.svg'
                height={200}
                width={200}
                alt='logo'
                className='mx-auto mb-6 bg-cover'
              />
              <div className='text-neutral-800'>
                <p className='mt-8 break-words text-neutral-800'>
                  <span className='font-semibold'>Diagnosis IQ </span> Smart Clinical Decision Support System for
                  Automated Hospital.
                </p>
                <p className='mt-4'>
                  <Mail className='mr-2' />
                  mail@gmail.com
                </p>
                <p className=''>
                  <Phone className='mr-2' />
                  0977 777 777
                </p>
                <Link className='' to='diagnosisiq.com' target='_blank' rel='noopener noreferrer'>
                  <Globe className='mr-2' />
                  diagnosisiq.com
                </Link>
                <p className='mt-2'>
                  <span className='font-semibold'>Địa chỉ:</span> 123 Nguyễn Văn Cừ, phường 6, quận 3, Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
          {/*End Col*/}
          <div className='pr-6 text-left lg:mx-auto min-w-[250px]'>
            <div>
              <h3 className='mb-4 font-medium tracking-wide uppercase dark:text-gray-900'>Chính sách & Hướng dẫn</h3>
              <ul className='space-y-1'>
                <li>
                  <a rel='noopener noreferrer' className='text-sm' href={path.landing}>
                    Hướng dẫn thanh toán VNPAY-QR
                  </a>
                </li>

                <li>
                  <a rel='noopener noreferrer' className='text-sm' href={path.landing}>
                    Chính sách bảo mật thông tin
                  </a>
                </li>
                <li>
                  <a rel='noopener noreferrer' className='text-sm' href={path.landing}>
                    Chính sách vận chuyển, giao nhận
                  </a>
                </li>

                {/* <li>
                  <a rel='noopener noreferrer' className='text-sm' href={path.policy_tiepnhanvakhieunai}>
                    Quy trình tiếp nhận & khiếu nại
                  </a>
                </li> */}
                <li>
                  <a rel='noopener noreferrer' className='text-sm' href={path.landing}>
                    Chính sách đổi trả, hoàn tiền
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*End Col*/}
          <div className='pl-0 lg:pl-6 text-left lg:mx-auto min-w-[220px]'>
            <div>
              <h3 className='mb-4 font-medium tracking-wide uppercase dark:text-gray-900'>Về chúng tôi</h3>
              <ul className='space-y-1'>
                <li>
                  <a rel='noopener noreferrer' className='text-sm' href='https://diagnosisiq.org.vn/' target='_blank'>
                    Diagnosis IQ
                  </a>
                </li>
                <li>
                  <a rel='noopener noreferrer' className='text-sm' href='#'>
                    Đội ngũ giảng viên
                  </a>
                </li>
                <li>
                  <a rel='noopener noreferrer' className='text-sm' href='#'>
                    Liên hệ với chúng tôi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='py-6 text-center text-gray-700'>© 2025 diagnosisiq.com - Việt Nam. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
