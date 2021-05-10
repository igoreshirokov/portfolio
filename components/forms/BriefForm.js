import { useEffect, useState } from 'react'
import Lang from '../Lang/Lang'


export default function BriefForm() {
    const [form, setForm] = useState({
        name: "",
        variant: "",
        phone: "",
        desc: ""
    })
    const [sended, setSended] = useState(false)

    function hundleSubmit(event) {
        event.preventDefault()

        console.log(form)

        setSended(!sended)
    }
    

    function hundleChange(event) {
        event.preventDefault()
        if (event.target.tagName === "SELECT") {
            setForm({ ...form, variant: event.target.value })
        }
        if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
            const type = event.target.getAttribute("name")
            if (type === "name") {
                setForm({ ...form, name: event.target.value })
            } else if (type === "phone") {
                setForm({ ...form, phone: event.target.value })
            } else if (type === "desc") {
                setForm({ ...form, desc: event.target.value })
            }
        }
    }


    return (
        sended ? (
            <>
                <div className="section">
                    <div className="page-headline">
                        <h2>{Lang().briefComplete}</h2>
                    </div>
                </div>
            </>
        ) : <>
            <div className="section">
                <div className="page-headline">
                    <h1>{Lang().briefOrderTitle}</h1>
                </div>
                <form onSubmit={hundleSubmit} id="brief-form">
                    <label>{Lang().briefName}</label>
                    <input onChange={hundleChange} value={form.name} name="name" type="text" required></input>
                    <label>{Lang().briefType}</label>
                    <select onChange={hundleChange} value={form.variant} >
                        <option>{Lang().briefTypeOption1}</option>
                        <option>{Lang().briefTypeOption2}</option>
                        <option>{Lang().briefTypeOption3}</option>
                        <option>{Lang().briefTypeOption4}</option>
                        <option>{Lang().briefTypeOption5}</option>
                    </select>
                    <label>{Lang().briefPhoneOrEmail}</label>
                    <input onChange={hundleChange} value={form.phone} type="text" name="phone" required></input>
                    <label>{Lang().briefDescription}</label>
                    <textarea onChange={hundleChange} value={form.desc} name="desc" required></textarea>
                    <button>{Lang().briefSend}</button>
                </form>
            </div>
        </>
    )
}