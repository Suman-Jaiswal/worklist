
import { useEffect } from 'react'

import SimpleCard from './SimpleCard'
import React, { useContext, useState } from 'react'
import { PlanContext } from '../contexts/PlanContext'
import AddPlanBtn from './AddPlanBtn'
import Icon from './Icon'

export default function Dashboard() {
    const [plansA, setPlansA] = useState([])
    const { plans } = useContext(PlanContext)
    console.log(plansA)

    useEffect(() => {
        setPlansA(plans)
    }, [plans])

    return (
        <>
            <div className='d-flex flex-wrap container-lg my-5 gap-4 dashboard' >
                {
                    plansA.length > 0 ? plansA.map(
                        (plan, i) => <SimpleCard
                            key={plan.id}
                            sno={i + 1}
                            plan={plan}
                        />
                    ) :
                        <div className='h4 text-secondary m-auto mt-5' >
                            <h4 className="text-secondary mb-5"> + Add Your Plans Here + </h4>
                            <Icon/>
                            <div style={{ position: 'relative', bottom: '150px', textAlign: 'center', width: '73%' }} >
                                <AddPlanBtn />
                            </div>
                        </div>
                }
            </div>

        </>
    )
}
