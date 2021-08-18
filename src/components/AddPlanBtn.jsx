import React, { useContext, useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { PlanContext } from '../contexts/PlanContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddPlanBtn({ variant, color }) {

    const { dispatch } = useContext(PlanContext)
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [topics, setTopics] = useState([])
    const [input, setInput] = useState('')

    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    useEffect(() => {

        const raw = input.split('\n')
        const array = [...raw]
        const rawTopics = []

        for (let i = 0; i < array.length; i++) {
            const obj = { completed: false, topicName: array[i] }
            rawTopics.push(obj)
        }

        setTopics(rawTopics)

    }, [input])

    const handleSubmit = (e) => {
        e.preventDefault()
        closeModal()
        dispatch({ type: 'ADD_PLAN', plan: { title, description, topics } })
        setTitle('')
        setDescription('')
        setTopics([])
    }

    return (
        <>
            <Button variant={variant} className={color} onClick={openModal} aria-labelledby="contained-modal-title-vcenter" centered >
                <FontAwesomeIcon icon={faPlus} size='lg' /> <span className='ms-1 create-text'>Create</span>
            </Button>

            <Modal size="lg" show={open} onHide={closeModal} >

                <Form onSubmit={handleSubmit} >

                    <Modal.Header className='text-center' closeButton >
                        <div className='m-auto bold display-6' >
                            Create Plan
                        </div>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Label>Title</Form.Label>
                        <Form.Control className='mb-4' onChange={(e) => setTitle(e.target.value)} placeholder={'Title'} />
                        <Form.Label>Description</Form.Label>
                        <Form.Control className='mb-4' onChange={(e) => setDescription(e.target.value)} placeholder={'Description'} />
                        <Form.Label>Topics</Form.Label>
                        <Form.Control className='mb-4' as='textarea' rows={8} onChange={(e) => setInput(e.target.value)}
                            placeholder={'Add topics in each line \n ********example*******\n Topic 1\n Topic 2\n Topic 3\n  ...\n '} />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type='submit' >Add</Button>
                    </Modal.Footer>

                </Form>

            </Modal>

        </>

    )
}
