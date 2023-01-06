import { Card } from "antd";
import { observer } from "mobx-react-lite";
import { Space, DatePicker } from "antd";

const { RangePicker } = DatePicker
const PilihTanggal = observer(() => {
    return (
        <Space>

            <DatePicker onChange={onChange} />
            <DatePicker onChange={onChange} picker="week" />
            <DatePicker onChange={onChange} picker="month" />
            <DatePicker onChange={onChange} picker="quarter" />
            <DatePicker onChange={onChange} picker="year" />
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker picker="year" />
        </Space>
    )
})

const onChange = (date, dateString) => {
    console.log(date, dateString);
}
export default function Expenses() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Expenses</h2>
            <Card>
                <PilihTanggal />
            </Card>
        </main>
    );
}