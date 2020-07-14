import React, { useState, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Row, Col, Button } from 'antd';
import AppBody from '../../../../components/Layouts/AppBody';
import { ROUTER_URL } from '../../../../common/Constant';
import { removeSlug } from './utils';
import HistorySection from './HistorySection';
import RepresentiveSection from './RepresentiveSection';
import AddressSection from './AddressSection';
import LoginInfoSection from './LoginInfoSection';
import BrandInfoSection from './BrandInfoSection';
import SocialSection from './SocialSection';
import ProductsInfoSection from './ProductsInfoSection';
import { useMerchantDetailType } from './hooks';

export default function Index() {
  const [form] = Form.useForm();
  const pageType = useMerchantDetailType();

  const onSubmit = (e) => {
    console.log(e);
  };

  //
  // const handleSearch = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     form.validateFields((err, values) => {
  //       console.log('Received values of form: ', values);
  //     });
  //   },
  //   [form],
  // );
  //
  // const handleReset = useCallback(() => {
  //   form.resetFields();
  // }, [form]);
  //
  // const toggle = useCallback(() => {
  //   setExpand(!expand);
  // }, [expand]);
  //
  // // To generate mock Form.Item
  // const getFields = () => {
  //   const formItemLayout = {
  //     labelCol: { span: 5 },
  //     wrapperCol: { span: 19 },
  //   };
  //
  //   return [...data, ...data, ...data].map((merchant, i) => {
  //     return (
  //       <Col span={10} key={i}>
  //         <Form.Item {...formItemLayout} label={`Field ${i}`}>
  //           <Input placeholder="placeholder" />
  //         </Form.Item>
  //       </Col>
  //     );
  //   });
  // };

  return (
    <AppBody title={pageType === 'DETAIL' ? 'Chi tiết đối tác' : 'Thêm mới đối tác'}>
      {pageType === 'DETAIL' && <HistorySection />}

      <Form form={form}>
        {/*Row1: Đại diện, Địa chỉ kd, Thông tin đăng nhập*/}
        <Row gutter={40}>
          {/*Block: Thông tin người đại diện*/}
          <Col span={8}>
            <RepresentiveSection />
          </Col>

          {/*Block: Địa chỉ kinh doanh*/}
          <Col span={8}>
            <AddressSection form={form} />
          </Col>

          {/*Block: Thông tin đăng nhập*/}
          <Col span={8}>
            <LoginInfoSection />
          </Col>
        </Row>

        {/*Row2: Thông tin cửa hàng, sản phẩm, MXH  */}
        <Row gutter={40}>
          {/*Col: Thông tin cửa hàng, Thông tin sản phẩm*/}
          <Col span={16}>
            {/*Block: Thông tin cửa hàng*/}
            <BrandInfoSection />

            {/*Block: Thông tin sản phẩm*/}
            <ProductsInfoSection />
          </Col>

          {/*Block: Mạng xã hội*/}
          <Col span={8}>
            <SocialSection />
          </Col>
        </Row>

        {/*Row3: Submit*/}
        {pageType === 'ADD' && (
          <Row>
            <Col span={8}>
              <Row>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: 'auto', marginRight: 25 }}
                >
                  Xác nhận
                </Button>
              </Row>
            </Col>
          </Row>
        )}
      </Form>
    </AppBody>
  );
}
