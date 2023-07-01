import React from 'react'
import Card from '../../../card'
import Button from '../../../forms/button'
import Table, { HeaderType, ColumnFormat, } from '../../../table/server'

const tableHeaders: Array<HeaderType> = [
  { value: 'Email', className: 'w-1/5', childClassName: 'justify-center' },
  { value: 'Username', className: 'w-2/5' },
  { value: 'Role', className: 'w-1/5', childClassName: 'justify-center' },
  { value: 'Action', className: 'w-1/5', childClassName: 'justify-center' },
]

const tableColumns: Array<ColumnFormat> = [
  {value: 'email', className: 'justify-center', childClassName: 'justify-center'},
  {value: 'username'},
  {value: 'role', className: 'justify-center', childClassName: 'justify-center'},
  {value: 'username', className: 'justify-center', childClassName: 'justify-center'},
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

function Index() {
  return (
    <div>
      <div className='mb-3 text-slate-700'>User Account Management</div>
      <div className='border-b border-gray-300 w-full mt-3 mb-3'></div>
      <Card>
        <div className='flex justify-between items-center'>
          <p className='text-slate-700 text-sm'>Data User Account</p>
          <Button onClick={() => { }}>
            <span className="material-symbols-outlined me-1 text-sm">
              add_circle
            </span>
            <span className='text-sm'>Add User Account</span>
          </Button>
        </div>
        <div className='border-b border-gray-300 w-full mt-4 mb-4'></div>
        <Table headers={tableHeaders} columns={tableColumns} data={dummyData} withIndex={true} />
      </Card>
    </div>
  )
}

export default Index