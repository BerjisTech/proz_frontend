import React from 'react'

const Agency = () => {
  const [agencies, setAgencies] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [page, setPage] = React.useState(1)
  const [total_pages, setTotalPages] = React.useState(1)
  const [total_items, setTotalItems] = React.useState(0)

  React.useEffect(() => {
    const getAgencies = async () => {
      try {
        const response = await fetch(
          `https://api.proz.com/v2/businesses?page=${page}&ids[]`,
          {
            headers: {
              'Authorization': `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
            },
            method: 'GET'
          },
        )

        const data = await response.json()
        setAgencies(data[0])
        setTotalPages(data.total_pages)
        setTotalItems(data.total_items)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getAgencies()
  }, [page])

  console.log(agencies)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <h1>Agency List</h1>
      {
        agencies && agencies['businesses'] && agencies['businesses'].length > 0 ? (
          <div>
            {agencies['businesses'].map(agency => {
              return (
                <div key={agency.business_id}>
                  <h3>{agency.business_name}</h3>
                  <p>{agency.business_link}</p>
                  <p>{agency.business_membership_package}</p>
                </div>
              )
            })
            }
            <p>Page {page} of {total_pages}</p>
            <p>Total items: {total_items}</p>
          </div>
        ) : (
          <p>No agencies found</p>
        )
      }
    </div >
  )
}

export default Agency
