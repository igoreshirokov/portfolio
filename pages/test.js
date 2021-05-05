import { useState } from 'react'


export default function test() {
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

    if (sended) {
        return (
            <>
                <div className="section">
                    <div className="page-headline">
                        <h2>Заявка на услуги успешно создана</h2>
                    </div>
                </div>
            </>
        )
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
        <>
            <div className="section">
                <div className="page-headline">
                    <h1>Заявка на услуги</h1>
                </div>
                <form onSubmit={hundleSubmit} onChange={hundleChange} id="brief-form">
                    <label>Имя:</label>
                    <input value={form.name} name="name" type="text" required></input>
                    <label>Тип задачи:</label>
                    <select value={form.variant} >
                        <option>Сайт под ключ</option>
                        <option>Парсинг</option>
                        <option>Чат-бот</option>
                        <option>Другое</option>
                    </select>
                    <label>Телефон или электронная почта:</label>
                    <input value={form.phone} type="text" name="phone" required></input>
                    <label>Описание задачи:</label>
                    <textarea value={form.desc} name="desc" required></textarea>
                    <button>Отправить</button>
                </form>
            </div>
        </>
    )
}