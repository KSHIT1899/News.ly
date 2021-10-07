import React, { Component } from 'react'
import load from './load.gif'
const Spinner = () => {
    return (
        <div className="text-center">
            <img className="my-3" src={load} alt="loading" />
        </div>
    )
}

export default Spinner
