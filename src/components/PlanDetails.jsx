import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router';
import { PlanContext } from '../contexts/PlanContext'

export default function PlanDetails() {
    const { id } = useParams()
    const [plan, setPlan] = useState({})
    const [toggle, setToggle] = useState(true)
    const { dispatch } = useContext(PlanContext)

    const handleCheck = (i) => {
        
        setToggle(!toggle)

        let obj = JSON.parse(localStorage.getItem('plans'))[plan.id]

        let newTopics = [...obj.topics]

        newTopics[i] = { ...newTopics[i], completed: !newTopics[i].completed }

        let newObj = { ...obj, topics: newTopics }

        let array = JSON.parse(localStorage.getItem('plans'))
        array[plan.id] = newObj

        localStorage.setItem('plans', JSON.stringify([...array]))

        const updatedPlans = JSON.parse(localStorage.getItem('plans'))

        dispatch({type: 'UPDATE_PLANS', updatedPlans})

    }

    useEffect(() => {
        const plan = JSON.parse(localStorage.getItem('plans')).find((plan) => plan.id === id)
        const planIndex = JSON.parse(localStorage.getItem('plans')).findIndex((plan) => plan.id === id)
        console.log(plan)
        setPlan(plan)
        plan.id = planIndex

    }, [id, toggle])

    return (
        <>
            <div className="display-6 pt-3 text-center">
                {plan.title}
            </div>
            <div className=" text-center py-2">
                {plan.description}
            </div>
            <div className="container my-1">
                <div className="inbox">
                    {
                        plan.topics ? plan.topics.map((topic, i) => <div key={i} className="item">
                            <input type="checkbox" onChange={() => handleCheck(i)} checked={topic.completed} />
                            <p className='topic-name'>{topic.topicName}</p>
                        </div>) : null
                    }
                </div>

            </div>

            

        </>
    )
}
