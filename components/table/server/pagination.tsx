import React, { useState, useEffect } from 'react'
import { PaginationProps } from '.'

function Pagination({
    totalPage,
    currentPage,
    onPageChange,
    onNextPageChange,
    onPreviousPageChange,
    onFirstPageChange,
    onLastPageChange
}: PaginationProps) {

    const [pages, setPages] = useState<Array<number>>([])
    const [shownPages, setShownPages] = useState<Array<number>>([])

    useEffect(() => {
        let indexOf: number = pages.indexOf(currentPage) + 1;
        let startIndex: number = indexOf - 2;
        let endIndex: number = indexOf + 3;
        let p: Array<number> = [];
        for (let index = startIndex; index < endIndex; index++) {
            p.push(index)
        }

        if (p[0] < 1) {
            p = pages.slice(0, 5)
        }

        if (p[4] > pages.length) {
            if (pages.length < 5) {
                p = pages
            } else {
                p = pages.slice(pages.length - 5, pages.length)
            }
        }
        setShownPages(p)
        return () => {
            setShownPages([])
        }
    }, [currentPage, pages])
    
    useEffect(() => {
        let p: Array<number> = [];
        for (let i = 1; i <= totalPage; i++) {
            p.push(i)
        }
        setPages(p)
        return () => {
            setPages([])
        }
    }, [totalPage])

    return (
        <nav className='flex items-center justify-between pt-3'>
            <span className='text-sm text-slate-600'>Showig 1 - 2 of 2 (1 pages)</span>
            <ul className='inline-flex items-center -space-x-px'>
                <li>
                    <a href='#' onClick={(e) => { e.preventDefault(); onFirstPageChange() }} className={`px-3 py-2 ml-0 leading-tight text-sm ${totalPage === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300 rounded-l-md`}>
                        <span className="material-symbols-outlined text-sm">
                            first_page
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={(e) => { e.preventDefault(); onPreviousPageChange() }} className={`px-3 py-2 ml-0 leading-tight text-sm ${totalPage === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300`}>
                        <span className="material-symbols-outlined text-sm">
                            chevron_left
                        </span>
                    </a>
                </li>
                {
                    shownPages.map((value, index) => {
                        return (
                            <li key={index} className=''>
                                <a href='#' onClick={(e) => { e.preventDefault(); onPageChange((value)); }} data-page={value} className={`${currentPage === value ? 'bg-blue-500 text-white border-blue-500' : 'text-slate-600 border-slate-300'} text-sm  px-3 py-2 leading-tight border`}>
                                    {value}
                                </a>
                            </li>
                        );
                    })
                }
                <li>
                    <a href='#' onClick={(e) => { e.preventDefault(); onNextPageChange() }} className={`px-3 py-2 ml-0 leading-tight text-sm ${currentPage === totalPage || totalPage === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300`}>
                        <span className="material-symbols-outlined text-sm">
                            chevron_right
                        </span>
                    </a>
                </li>
                <li>
                    <a href='#' onClick={(e) => { e.preventDefault(); onLastPageChange() }} className={`px-3 py-2 ml-0 leading-tight text-sm ${currentPage === totalPage || totalPage === 0 ? 'text-slate-400' : 'text-slate-600'} border border-slate-300 rounded-r-md`}>
                        <span className="material-symbols-outlined text-sm">
                            last_page
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination