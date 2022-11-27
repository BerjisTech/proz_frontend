import React from 'react'
import DataTable from 'react-data-table-component'
import JobDescription from './JobDescription'

const PreviousJobs = () => {
    const jobData = [
        {
            title: 'Translate legal document',
            language: 'English to Spanish',
            client: 'John Doe',
            progress: 60,
            rating: 4.5,
            paid: true,
            complete: true,
            cancelled: false,
            price: 200
        },
        {
            title: 'Translate legal document',
            language: 'English to Spanish',
            client: 'John Doe',
            progress: 60,
            rating: 4.5,
            paid: true,
            complete: true,
            cancelled: false,
            price: 200
        }
    ]

    const columns = [
        {
            name: 'Job',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Language',
            selector: row => row.language,
            sortable: true
        },
        {
            name: 'Client',
            selector: row => row.client,
            sortable: true
        },
        {
            name: 'Progress',
            selector: row => row.progress,
            sortable: true
        },
        {
            name: 'Rating',
            selector: row => row.rating,
            sortable: true
        },
        {
            name: 'Paid',
            selector: row => row.paid ? 'Yes' : 'No',
            sortable: true
        },
        {
            name: 'Complete',
            selector: row => row.complete ? 'Yes' : 'No',
            sortable: true
        },
        {
            name: 'Cancelled',
            selector: row => row.cancelled ? 'Yes' : 'No',
            sortable: true
        },
        {
            name: 'Price',
            selector: row => `$${row.price}`,
            sortable: true
        }
    ]

    return (
        <DataTable
            title="Previous Jobs"
            columns={columns}
            data={jobData}
            pagination
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            paginationComponentOptions={{
                rowsPerPageText: 'Rows per page:',
                rangeSeparatorText: 'of',
                noRowsPerPage: false,
                selectAllRowsItem: true,
                selectAllRowsItemText: 'All'
            }}
            selectableRows
            expandableRows
            expandableRowsComponent={JobDescription}
        />
    )
}

export default PreviousJobs
