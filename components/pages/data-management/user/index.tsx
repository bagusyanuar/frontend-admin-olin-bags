import React, { useState } from 'react'
import Card from '../../../card'
import Button from '../../../forms/button'
import Table, { HeaderType, ColumnFormat, } from '../../../table/server'
import Modal from '../../../modal'
import Textfield from '../../../forms/textfield'
import Select, { DataSelectType } from '../../../forms/select'

const tableHeaders: Array<HeaderType> = [
  { value: 'Email', className: 'w-1/5', childClassName: 'justify-center' },
  { value: 'Username', className: 'w-2/5' },
  { value: 'Role', className: 'w-1/5', childClassName: 'justify-center' },
  { value: 'Action', className: 'w-1', childClassName: 'justify-center' },
]

const tableColumns: Array<ColumnFormat> = [
  { value: 'email', className: 'justify-center', childClassName: 'justify-center text-sm' },
  { value: 'username', childClassName: 'text-sm' },
  { value: 'role', className: 'justify-center', childClassName: 'justify-center text-sm' },
  { render: () => { return '-' }, className: 'justify-center', childClassName: 'justify-center text-sm' },
]

const dummyData: Array<any> = [
  {
    email: 'administrator@gmail.com',
    username: 'administrator',
    role: 'administrator'
  },
  {
    email: 'adminACK@gmail.com',
    username: 'admin.ack',
    role: 'admin-ack'
  },
]

const rolesData: Array<DataSelectType> = [
  {
    value: 'administrator',
    text: 'Administrator'
  },
  {
    value: 'admin-ack',
    text: 'Admin ACK'
  }
]

function Index() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  return (
    <div>
      <div className='mb-3 text-slate-700'>User Account Management</div>
      <div className='border-b border-gray-300 w-full mt-3 mb-3'></div>
      <Card>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <span className='material-symbols-outlined me-2 text-slate-500'>person</span>
            <p className='text-slate-500 text-sm'>Data User Accounts</p>
          </div>

          <Button onClick={() => { setModalOpen(true) }}>
            <span className="material-symbols-outlined me-1 text-sm">
              add_circle
            </span>
            <span className='text-sm'>Add User Account</span>
          </Button>
        </div>
        <div className='border-b border-gray-300 w-full mt-4 mb-4'></div>
        <Table headers={tableHeaders} columns={tableColumns} data={dummyData} withIndex={true} />
      </Card>
      <Modal open={modalOpen} onClose={() => { setModalOpen(false) }} title='Modal Add User Account'>
        <Textfield type='email' value={email} onChange={(e, v) => { setEmail(v) }} placeholder='email' className='mb-3' />
        <Textfield type='text' value={username} onChange={(e, v) => { setUsername(v) }} placeholder='username' className='mb-3' />
        <Textfield type='password' value={password} onChange={(e, v) => { setPassword(v) }} placeholder='password' className='mb-3' />
        <Select data={rolesData} onChange={() => {}} />
        <div className='border-b border-gray-300 w-full mt-3 mb-3'></div>
        <div className='w-full flex justify-end'>
          <Button onClick={() => { }}>
            <span className="material-symbols-outlined me-1 text-sm">
              check
            </span>
            <span className='text-sm'>Save</span>
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Index