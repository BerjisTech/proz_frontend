import React, { useState } from 'react'
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

const Search = () => {
  // const [search, setSearch] = React.useState('')
  // const [results, setResults] = React.useState([])
  // const [loading, setLoading] = React.useState(false)
  // const [error, setError] = React.useState(false)

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   setLoading(true)
  //   setError(false)
  //   fetch(`https://api.github.com/search/users?q=${search}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setResults(data.items)
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       setError(true)
  //       setLoading(false)
  //     })
  // }

  // useState(() => {
  //   handleSearch()
  // }, [])

  // setSearch(search)

  const columns = [
    {
      name: 'Languages',
      selector: row => row.languages,
      sortable: true
    },
    {
      name: 'Fields',
      selector: row => row.fields,
      sortable: true
    },
    {
      name: 'Term & Translation',
      selector: row => `${row.term} -> ${row.translation}`,
      sortable: true
    },
    {
      name: 'Poster | Answerer',
      selector: row => `${row.poster} | ${row.answerer}`,
      sortable: true
    },
    {
      name: 'Source',
      selector: row => row.source,
      sortable: true
    },
  ]

  const data = [{
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 1,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 2,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 3,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 4,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 5,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 6,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 7,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 8,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 9,
    source: "Wikipedia"
  },
  {
    languages: "English to French",
    fields: "Business, Finance, Law, Marketing, Science, Technology, Travel, and more",
    term: "Business",
    translation: "Affaires",
    poster_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    poster: "John Doe",
    translator_ul: "https://www.englishfrenchtranslation.com/wp-content/uploads/2019/03/English-French-Translation-Service-1.jpg",
    translator: "Jane Doe",
    id: 10,
    source: "Wikipedia",
    source_url: "https://en.wikipedia.org/wiki/Business"
  }
  ]

  return (
    <DataTable
      pagination
      columns={columns}
      data={data}
      selectableRows
      expandableRows
      expandableRowsComponent={ExpandedComponent}
    />
    // <table className='table table-responsive table-hover'>
    //   <thead>
    //     <tr>
    //       <th>Languages</th>
    //       <th>Fields</th>
    //       <th className='text-center'>Term & Translation</th>
    //       <th className='text-center'>Poster | Answerer</th>
    //       <th className='text-end'>Source</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {results.map((result) => (
    //       <tr key={result.id} className="cursor-pointer">
    //         <td>{result.languages}</td>
    //         <td>{result.fields}</td>
    //         <td className='text-center'>{result.term} - {result.translation}</td>
    //         <td className='text-center'>
    //           <a href={result.poster_ul} target="_BLANK">{result.poster}</a> | <a href={result.translator_ul} target="_BLANK">{result.translator}</a></td>
    //         <td className='text-end'><a href={result.source_url} target="_BLANK">{result.source}</a></td>
    //       </tr>
    //     ))}
    //   </tbody>
    //   <tfoot></tfoot>
    // </table>
  )
}

export default Search
