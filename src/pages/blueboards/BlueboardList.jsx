import React from 'react'
import Blueboards from '../../components/blueboard/Blueboards';

const BlueboardList = () => {

    return (
        <div className='row'>
            <div className='col-2'>
                <div className='sticky top-20'>
                    Biringanya
                </div>
            </div>
            <div className='col-8'>
                <Blueboards />
            </div>
            <div className='col-2'></div>
        </div>
    )
}

export default BlueboardList
