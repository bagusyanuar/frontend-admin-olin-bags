import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { TextfieldPrefixIcon } from '../../forms/textfield'
import { ButtonWithLoading } from '../../forms/button'

function Index() {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <main className='h-screen bg-blue-600 flex justify-center items-center'>
      <div className='sm:w-1/3 md:w-1/5 bg-slate-50 rounded-md px-5 py-5 shadow-lg'>
        <div className='flex items-center justify-center mb-6'>
          <Image src="/assets/brand-logo.png" width={150} height={100} alt="logo" />
        </div>
        <div id='login-form'>
          <TextfieldPrefixIcon
            icon='person'
            type='text'
            onChange={(e, v) => { setUsername(v) }}
            value={username}
            className='mb-3'
            placeholder='username'
          />
          <TextfieldPrefixIcon
            icon='lock'
            type='password'
            onChange={(e, v) => { setPassword(v) }}
            value={password}
            className='mb-3'
            placeholder='password'
          />
          <div className='flex justify-end'>
            <ButtonWithLoading isLoading={false} onClick={() => {router.push('/dashboard') }}>
              <span>Login</span>
            </ButtonWithLoading>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Index