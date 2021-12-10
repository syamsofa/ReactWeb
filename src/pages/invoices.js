import { restElement } from '@babel/types';
import { Modal, Button, Table, Tag, Space, Card, Row, Col } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import React from 'react';


const TabelInvoices = observer(() => {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            setPost(response.data);
            console.log(response.data)
        });
    }, []);

    if (!post) return null;

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'age',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'address',
        }
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    console.log(post)
    return <Table columns={columns} dataSource={post} />
})


const AppModal = () => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal with async logic
            </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};

class AppButton extends React.Component {
    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        return (
            <>

                <Space style={{ width: '100%' }}>

                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => this.enterLoading(1)}
                    >
                        Click me!
                    </Button>
                    <AppModal />
                </Space>
            </>
        );
    }
}

export default function Invoices() {
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>
            <Card>
                <Row>
                    <Col span={24}>
                        <AppButton />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <TabelInvoices />

                    </Col>
                </Row>
            </Card>


        </main>

    );
}