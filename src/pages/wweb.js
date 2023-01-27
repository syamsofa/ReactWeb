import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { Space, DatePicker } from "antd";
import { Server } from "socket.io";
import axios from "axios";
const io = require('socket.io')()

console.log("OK    0000")
axios.post(`http://localhost:8000/send-message`).then((response) => {

    console.log(response.data)
});
export default function Wweb() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Web WhatsApp</h2>

        </main>
    );
}