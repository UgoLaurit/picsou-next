import { useEffect, useState } from 'react'

import { AssetIcon } from '@/assets/icons/AssetIcon'
import { InvestIcon } from '@/assets/icons/InvestIcon'
import Link from 'next/link'
import { SavingsIcon } from '@/assets/icons/SavingsIcon'
import { UploadIcon } from '@/assets/icons/UploadIcon'
import { WalletIcon } from '@/assets/icons/WalletIcon'
import { usePathname } from 'next/navigation'

export const NavBar = () => {
  const pathname = usePathname()

  useEffect(() => {
    if (document.getElementsByClassName('active').length === 0) {
      document.getElementById('cursor')!.style.display = 'none'
    } else {
      const activeElementHeight = (
        document.getElementsByClassName('active')[0] as HTMLElement
      ).offsetTop

      document.getElementById('cursor')!.style.display = 'block'
      document.getElementById(
        'cursor'
      )!.style.transform = `translateY(${activeElementHeight}px)`
    }
  }, [pathname])

  return (
    <>
      <nav className='h-screen w-20 bg-[#3B4252] text-[#FFFFFF] relative border-r-2 border-[#2E3440]'>
        <ul className='flex flex-col items-center h-full gap-12 px-3 py-4'>
          <li className={`${pathname === '/' ? 'active' : ''}`}>
            <Link href='/'>
              <img src='/icon.png' className='w-12 h-12' />
            </Link>
          </li>

          <li className='flex flex-col gap-2 p-1.5 bg-[#81A1C1] rounded-xl'>
            <ul className='flex flex-col gap-2 opacity-100'>
              <li className={`${pathname === '/ugo/wallets' ? 'active' : ''}`}>
                <Link href='/ugo/wallets'>
                  <WalletIcon color={'#415161'} />
                </Link>
              </li>
              <li className={`${pathname === '/ugo/savings' ? 'active' : ''}`}>
                <Link href='/ugo/savings'>
                  <SavingsIcon color={'#415161'} />
                </Link>
              </li>
              <li
                className={`${pathname === '/ugo/investments' ? 'active' : ''}`}
              >
                <Link href='/ugo/investments'>
                  <InvestIcon color={'#415161'} />
                </Link>
              </li>
              <li className={`${pathname === '/ugo/assets' ? 'active' : ''}`}>
                <Link href='/ugo/assets'>
                  <AssetIcon color={'#415161'} />
                </Link>
              </li>
            </ul>
          </li>

          <li className='flex flex-col gap-2 p-1.5 bg-[#8FBCBB] rounded-xl'>
            <ul className='flex flex-col gap-2 opacity-100'>
              <li
                className={`${
                  pathname === '/joint-account/wallets' ? 'active' : ''
                }`}
              >
                <Link href='/joint-account/wallets'>
                  <WalletIcon color={'#485e5e'} />
                </Link>
              </li>
              <li
                className={`${
                  pathname === '/joint-account/savings' ? 'active' : ''
                }`}
              >
                <Link href='/joint-account/savings'>
                  <SavingsIcon color={'#485e5e'} />
                </Link>
              </li>
            </ul>
          </li>

          <li className='flex flex-col gap-2 p-1.5 bg-[#EBCB8B] rounded-xl'>
            <ul className='flex flex-col gap-2 opacity-100'>
              <li className={`${pathname === '/rima/wallets' ? 'active' : ''}`}>
                <Link href='/rima/wallets'>
                  <WalletIcon color={'#766646'} />
                </Link>
              </li>
              <li className={`${pathname === '/rima/savings' ? 'active' : ''}`}>
                <Link href='/rima/savings'>
                  <SavingsIcon color={'#766646'} />
                </Link>
              </li>
              <li className={`${pathname === '/rima/assets' ? 'active' : ''}`}>
                <Link href='/rima/assets'>
                  <AssetIcon color={'#766646'} />
                </Link>
              </li>
            </ul>
          </li>

          <li className={`mt-auto ${pathname === '/upload' ? 'active' : ''}`}>
            <Link href='/upload'>
              <UploadIcon color={'#FFFFFF'} />
            </Link>
          </li>
        </ul>

        <span
          id='cursor'
          className='absolute top-0 left-0 mt-1 w-1.5 h-10 bg-[#ECEFF4] rounded transition-all duration-300 ease-out hidden'
        ></span>
      </nav>
    </>
  )
}
