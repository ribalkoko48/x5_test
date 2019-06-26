import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Button, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import classnames from 'classnames'
import clsx from 'clsx'
import {getJobs} from "../Actions/index"
import Card from "../components/Card/index";
import './style.scss'

class AppContainer extends PureComponent {

    constructor() {
        super()

        this.classes = makeStyles(theme => ({
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                width: 200
            },
            dense: {
                marginTop: 19
            }
        }))
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResizeListener)

        this.handleResizeListener()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizeListener)
    }

    handleResizeListener = () => {
        if (window.innerWidth <= 420) { // проверка на "column" не нужна, render только один раз сработает
            this.setState({
                searchValue: 'column'
            })
        }

        // P.S. можно сделать логику с фиксацией последнего состояния, до авто переключения
    }

    state = {
        searchValue: 'row',
        data: null
    }

    renderCards() {
        const {searchValue, data} = this.state
        const isRowContent = searchValue === 'row'

        return data.map((item, index) => (
            <Card key={item.id} index={index} {...item} />
        ))
    }

    setResponseDate = (data) => {
        this.setState({
            data
        })
    }

    handleChangeSearchValue = (event) => {
        const searchValue = event.target.value

        getJobs(searchValue, this.setResponseDate)
    }

    render() {
        const {searchValue, data} = this.state
        const cardsClassName = classnames('underground__cards', {
            underground__cards_row: searchValue === 'row'
        })

        return (
            <div className="jobs">
                <nav>
                    <TextField
                        label="Введите поле поиска"
                        className={clsx(this.classes.textField, this.classes.dense)}
                        margin="dense"
                        onChange={this.handleChangeSearchValue}
                    />
                    <div className="jobs__buttons">
                        <Button variant="contained" color="primary">Найти</Button>
                        <Button variant="contained" color="secondary">Сброс</Button>
                    </div>
                </nav>
                <div className={cardsClassName}>{data && data.length
                    ? this.renderCards()
                    : data && data.length === 0
                        ? `По запросу: "${searchValue}" ничего не найдено. Попробуйте другую строку запроса.`
                        : null
                }
                </div>
            </div>
        )
    }

}

export default AppContainer