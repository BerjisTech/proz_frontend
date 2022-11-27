import React from 'react'
import DataTable from 'react-data-table-component';

const ExpandedComponent = ({ data }) => {
  return (
    <>
      <div className='d-flex gap-3 flex-wrap p-2 bg-green-100'>
        <div className='d-flex flex-col gap-1'>
          <span><span className='fw-bold'>{data.from_language} Term</span>: {data.term}</span>
          <span><span className='fw-bold'>{data.to_language} Translation</span>: {data.translation}</span>
        </div>
        <div className='d-flex flex-col gap-1 flex-grow border-start-1 px-2'>
          <span>Poster: <a href={data.poster_ul}>{data.poster}</a></span>
          <span>Answerer: <a href={data.translator_ul}>{data.translator}</a></span>
          <span>Source: <a href={data.source_url}>{data.source}</a></span>
          <span>Fields: {data.fields}</span>
          <span><a href={`/kudoz/term/${data.term}`}>View full discussion</a></span>
        </div>
      </div>
    </>
  )
};

const Search = () => {

  const columns = [
    {
      name: 'Languages',
      selector: row => `${row.from_language} - ${row.to_language}`,
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    from_language: "English",
    to_language: "French",
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
    <>
      <DataTable
        pagination
        columns={columns}
        data={data}
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
      />
    </>
  )
}

export default Search
