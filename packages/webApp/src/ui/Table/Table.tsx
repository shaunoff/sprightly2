import React from 'react'
import { HeadProps } from './Head'
import { HeadCellProps } from './HeadCell'
import { BodyProps } from './Body'
import { RowProps } from './Row'
import { CellProps } from './Cell'

interface Props extends React.TableHTMLAttributes<HTMLTableElement> {}

export interface CompoundedComponent
  extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTableElement>> {
  Head: React.FC<HeadProps>
  HeadCell: React.FC<HeadCellProps>
  Body: React.FC<BodyProps>
  Row: React.FC<RowProps>
  Cell: React.FC<CellProps>
}

const Table = React.forwardRef<HTMLTableElement & Props>(function Table(props, ref) {
  const { children, ...other } = props
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200" ref={ref} {...other}>
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}) as CompoundedComponent

export default Table
