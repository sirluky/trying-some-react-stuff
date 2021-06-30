import { connect } from 'react-redux';
import React from 'react'
import { useQuery } from 'react-query';
import MyTable from './components/MyTable'
import { addRow } from './store';


function TableDataProvider(props) {
  console.log(props)
  const { isLoading, error, data } = useQuery(['posts', props.rowsShown], () =>
    fetch(`http://localhost:4000/posts?_limit=${props.rowsShown}`).then(res =>
      res.json()
    )
    , { initialData: [], keepPreviousData: true })


  if (error) return 'An error has occurred: ' + error.message

  return (
    <MyTable data={data} />
  )
}

const mapStateToProps = (state, ownProps) => ({
  rowsShown: state.rowsShown
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(mapStateToProps)
export default connectToStore(TableDataProvider)