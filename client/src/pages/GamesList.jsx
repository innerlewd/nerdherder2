import React, { Component } from 'react'
import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  } from 'react-table'
import api from '../utils/API'

import styled from 'styled-components'

//import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class GamesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: [],
            columns: [],
            isLoading: false,
        }
    }
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getMyGames().then(games => {
            this.setState({
                games: games.data.data,
                isLoading: false,
            })
        })
    }
    render() {
        const { games, isLoading } = this.state
        console.log('TCL: GamesList -> render -> games', games)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!games.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <useTable
                        data={games}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default GamesList
