import React, {PureComponent} from 'react'
import {Button, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import classnames from 'classnames'
import clsx from 'clsx'
import {getJobs} from "../Actions"
import Card from "../components/Card";
import Loader from "../components/Loader";
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

    state = {
        searchValue: '',
        data: null,
        isLoaded: false
    }

    renderCards() {
        const {data} = this.state

        return data.map((item, index) => (
            <Card key={item.id} index={index} {...item} />
        ))
    }

    setResponseDate = (data) => {
        this.setState({
            isLoaded: false,
            data
        })
    }

    handleSubmit = (event) => {
        const searchValue = event.target.value

        this.setState({
                isLoaded: true
            }, () => getJobs(searchValue, this.setResponseDate)
        )
    }

    handleReset = () => {
        this.setState({
            isLoaded: false,
            searchValue: '',
            data: null
        })
    }

    render() {
        const {searchValue, data, isLoaded} = this.state
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
                    />
                    <div className="jobs__buttons">
                        <Button onClick={this.handleSubmit} variant="contained" color="primary">Найти</Button>
                        <Button onClick={this.handleReset} variant="contained" color="secondary">Сброс</Button>
                    </div>
                </nav>
                <div className={cardsClassName}>{data && data.length
                    ? this.renderCards()
                    : data && data.length === 0
                        ? `По запросу: "${searchValue}" ничего не найдено. Попробуйте другую строку запроса.`
                        : null
                }
                </div>
                <Loader active={isLoaded} />
            </div>
        )
    }

}

export default AppContainer