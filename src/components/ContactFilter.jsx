import React, { Component } from 'react'
export class ContactFilter extends Component {
    state = {
        filterBy: null,
    }
    componentDidMount() {
        this.setState({ filterBy: { ...this.props.filterBy } })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(
            ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
            () => this.props.onChangeFilter(this.state.filterBy)
        )
    }
    render() {
        if (!this.state.filterBy) return <div>Loading...</div>
        const { txt } = this.state.filterBy
        return (
            <form className='contact-filter'>
                <section>
                    <input onChange={this.handleChange} value={txt} type="text" name="txt" id="txt" placeholder="Search..."/>
                </section>
            </form>
        )
    }
}