import React from 'react'
import { useParams } from 'react-router-dom'
import Agency from '../../components/hire/Agency'
import Freelancer from '../../components/hire/Freelancer'

const Hire = () => {
    const url_params = useParams()
    const freelancer_plug = ['freelancers', 'freelancer']
    let translator_type = url_params.translator_type
    return (
        <div>
            {freelancer_plug.includes(translator_type) ? <Freelancer /> : <Agency />}
        </div>
    )
}

export default Hire
