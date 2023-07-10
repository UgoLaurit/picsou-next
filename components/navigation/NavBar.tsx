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
          <li>
            <Link href='/' className='flex flex-row items-center gap-2'>
              <img src='/icon.png' className='w-12 h-12' />
              {/* <span>Compte courant</span> */}
            </Link>
          </li>

          <li className='flex flex-col gap-2 p-1.5 bg-[#81A1C1] rounded-xl'>
            {/* <Link href='#' className='flex flex-row items-center gap-2'>
              <Image src='/user.svg' alt={''} width={44} height={44} />
              <span>Ugo</span>
            </Link> */}
            <ul className='flex flex-col gap-2 opacity-100'>
              <li className={`${pathname === '/ugo/wallets' ? 'active' : ''}`}>
                <Link
                  href='/ugo/wallets'
                  className='flex flex-row items-center gap-2'
                >
                  <WalletIcon color={'#415161'} />
                  {/* <span>Compte courant</span> */}
                </Link>
              </li>
              <li className={`${pathname === '/ugo/savings' ? 'active' : ''}`}>
                <Link
                  href='/ugo/savings'
                  className='flex flex-row items-center gap-2'
                >
                  <SavingsIcon color={'#415161'} />
                  {/* <span>Épargne</span> */}
                </Link>
              </li>
              <li
                className={`${pathname === '/ugo/investments' ? 'active' : ''}`}
              >
                <Link
                  href='/ugo/investments'
                  className='flex flex-row items-center gap-2'
                >
                  <InvestIcon color={'#415161'} />
                  {/* <span>Investissements</span> */}
                </Link>
              </li>
              <li className={`${pathname === '/ugo/assets' ? 'active' : ''}`}>
                <Link
                  href='/ugo/assets'
                  className='flex flex-row items-center gap-2'
                >
                  <AssetIcon color={'#415161'} />
                  {/* <span>Patrimoine</span> */}
                </Link>
              </li>
            </ul>
          </li>

          <li className='flex flex-col gap-2 p-1.5 bg-[#8FBCBB] rounded-xl'>
            {/* <Link href='#' className='flex flex-row items-center gap-2'>
              <Image src='/users.svg' alt={''} width={44} height={44} />
              <span>Compte joint</span>
            </Link> */}
            <ul className='flex flex-col gap-2 opacity-100'>
              <li
                className={`${
                  pathname === '/joint-account/wallets' ? 'active' : ''
                }`}
              >
                <Link
                  href='/joint-account/wallets'
                  className='flex flex-row items-center gap-2'
                >
                  <WalletIcon color={'#485e5e'} />
                  {/* <span>Compte courant</span> */}
                </Link>
              </li>
              <li
                className={`${
                  pathname === '/joint-account/savings' ? 'active' : ''
                }`}
              >
                <Link
                  href='/joint-account/savings'
                  className='flex flex-row items-center gap-2'
                >
                  <SavingsIcon color={'#485e5e'} />
                  {/* <span>Épargne</span> */}
                </Link>
              </li>
            </ul>
          </li>

          <li className='flex flex-col gap-2 p-1.5 bg-[#EBCB8B] rounded-xl'>
            {/* <Link href='#' className='flex flex-row items-center gap-2'>
              <Image src='/user.svg' alt={''} width={44} height={44} />
              <span>Rima</span>
            </Link> */}
            <ul className='flex flex-col gap-2 opacity-100'>
              <li className={`${pathname === '/rima/wallets' ? 'active' : ''}`}>
                <Link
                  href='/rima/wallets'
                  className='flex flex-row items-center gap-2'
                >
                  <WalletIcon color={'#766646'} />
                  {/* <span>Compte courant</span> */}
                </Link>
              </li>
              <li className={`${pathname === '/rima/savings' ? 'active' : ''}`}>
                <Link
                  href='/rima/savings'
                  className='flex flex-row items-center gap-2'
                >
                  <SavingsIcon color={'#766646'} />
                  {/* <span>Épargne</span> */}
                </Link>
              </li>
              <li className={`${pathname === '/rima/assets' ? 'active' : ''}`}>
                <Link
                  href='/rima/assets'
                  className='flex flex-row items-center gap-2'
                >
                  <AssetIcon color={'#766646'} />
                  {/* <span>Patrimoine</span> */}
                </Link>
              </li>
            </ul>
          </li>

          <li className='mt-auto'>
            <button>
              <UploadIcon color={'#FFFFFF'} />
            </button>
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
