import React, { Component } from 'react';
import * as Constant from '../../../common/Constant';
import { Form, Input, Button, Checkbox, Tabs, Row, Col, Typography, Steps, Card, Avatar, Divider } from 'antd';
import { Helmet } from 'react-helmet';
import LoginStyle from './Style';
import {
    UserOutlined, LockOutlined, ShopOutlined, SendOutlined, MailOutlined, PhoneOutlined,
    FormOutlined, SkinOutlined, RocketOutlined, SmileOutlined
} from '@ant-design/icons';

class LoginPage extends Component {

    login = () => {
        this.props.history.push(Constant.ROUTER_URL.OVERVIEW_PAGE);
    }

    render() {
        return (

            <LoginStyle>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>WeWear Admin Center</title>
                    <link rel="" href="" />
                </Helmet>

                <Row justify="center">
                    <Col span={8} className="banner-wrapper">
                        <Typography.Title className="text-center wewear-text">WEWEAR</Typography.Title>
                        <h1 className="text-center seller-center-text">ADMIN CENTER</h1>
                        <h2 className="text-blue-800"> Sứ mệnh của WeWear là đưa thương hiệu của bạn
                                đến người dùng &amp; là giải pháp tăng doanh thu hiệu quả !</h2>
                        <Steps direction="vertical" size="small">
                            <Steps.Step icon={<FormOutlined />} title="Đăng ký" status="finish" />
                            <Steps.Step icon={<SkinOutlined />} title="Đăng sản phẩm" status="finish" />
                            <Steps.Step icon={<SmileOutlined />} title="WeWear hỗ trợ nhãn hàng" status="finish" />
                            <Steps.Step icon={<RocketOutlined />} title="Mở rộng thương hiệu &amp; tăng doanh thu" status="finish" />
                        </Steps>
                        <div className="text-center">
                            <Button size="large" danger icon={<ShopOutlined />}>TẠO TÀI KHOẢN BÁN HÀNG NGAY</Button>
                        </div>
                    </Col>
                    <Col span={8} className="login-wrapper">
                        <Card className="login-card" cover={<Avatar size={120} style={{ background: "#f56a00" }}>WEWEAR</Avatar>}>
                            <Card.Meta description={
                                <Tabs type="card" style={{ minHeight: 290 }}>
                                    <Tabs.TabPane tab="Đăng nhập" key="1">
                                        <Form
                                            name="login"
                                            initialValues={{ remember: true }}
                                            onFinish={this.onFinish}
                                        >
                                            <Form.Item name="username"
                                                rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản' }]}
                                            >
                                                <Input prefix={<UserOutlined />} placeholder="Tên tài khoản" />
                                            </Form.Item>
                                            <Form.Item name="password"
                                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
                                            >
                                                <Input prefix={<LockOutlined />} type="password" placeholder="Mật khẩu" />
                                            </Form.Item>
                                            <Form.Item>
                                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                                    <Checkbox>Nhớ đăng nhập</Checkbox>
                                                </Form.Item>
                                            </Form.Item>
                                            <Form.Item >
                                                <Button block type="primary" size="large" onClick={this.login} >ĐĂNG NHẬP</Button>
                                            </Form.Item>
                                        </Form>
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab="Quên mật khẩu" key="2">
                                        <b>Nhập email hoặc số điện thoại đăng ký để nhận mã</b> <br /><br />
                                        <Input addonBefore={<MailOutlined />} addonAfter={<SendOutlined onClick={() => console.log(1)} />} />
                                        <Divider>Hoặc</Divider>
                                        <Input addonBefore={<PhoneOutlined />} addonAfter={<SendOutlined onClick={() => console.log(1)} />} />
                                        <br /><br />
                                        <Input.Group compact>
                                            <Input addonBefore="PIN" style={{ width: '50%' }} />
                                            <Button type="primary">Tiếp tục</Button>
                                            <Button type="link">Gửi lại</Button>
                                        </Input.Group>
                                    </Tabs.TabPane>
                                </Tabs>
                            } />
                        </Card>
                    </Col>
                </Row>
                <p className="mt-5 text-center">{Constant.FOTTER_TEXT}</p>
            </LoginStyle>
        );
    }
}

export default LoginPage;