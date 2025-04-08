import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Radio,
  Select,
  Space,
  Upload,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Navigate from "../../Navigate";

const AddRecipe = () => {
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = (file) =>
    __awaiter(void 0, void 0, void 0, function* () {
      let src = file.url;
      if (!src) {
        src = yield new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow === null || imgWindow === void 0
        ? void 0
        : imgWindow.document.write(image.outerHTML);
    });

  useEffect(() => {
    form.setFieldsValue({ cooking: [""] });
  }, [form]);

  useEffect(() => {
    form.setFieldsValue({ ingredients: [""] });
  }, [form]);

  useEffect(() => {
    form.setFieldsValue({ nutrition: [""] });
  }, [form]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-1">
        <Navigate title={"Customers"}></Navigate>
        <div id="recipe" className="p-5 mt-4 bg-white h-screen">
      <Form
        form={form}
        name="dynamic_form"
        onFinish={onFinish}
        layout="vertical"
        onFinishFailed={onFinishFailed}
      >
        <div className="grid grid-cols-3 gap-11">
          <div>
            <Form.Item
              label="Recipe Nam"
              name="name"
              rules={[
                { required: true, message: "Please input auction item name!" },
              ]}
            >
              <Input placeholder="Enter auction item name" style={{ borderRadius: "0px", padding: "6px 8px" }} />
            </Form.Item>

            <Form.Item
              label="Meal Type"
              name="mealType"
              rules={[
                { required: true, message: "Please input your meal type" },
              ]}
            >
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      activeBorderColor: "rgb(250,59,59)",
                      borderRadius: 0,
                     
                    },
                  },
                }}
              >
                <Select
                
                  labelInValue
                  defaultValue={{ value: "Meal Type", label: "Meal Type" }}
                  options={[
                    {
                      value: "jack",
                      label: "Meal Type",
                    },
                    {
                      value: "lucy",
                      label: "Breakfast",
                    },
                  ]}
                />
              </ConfigProvider>
            </Form.Item>

            <Form.Item
              label="Meal Type"
              name="mealType"
              rules={[
                { required: true, message: "Please input your meal type" },
              ]}
            >
              <Select
                labelInValue
                defaultValue={{ value: "lucy", label: "Lucy (101)" }}
                options={[
                  {
                    value: "jack",
                    label: "Jack (100)",
                  },
                  {
                    value: "lucy",
                    label: "Lucy (101)",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input style={{ borderRadius: "0px", padding: "6px 8px" }} />
            </Form.Item>

            <Form.Item
              label="Meal Type"
              name="mealType"
              rules={[
                { required: true, message: "Please input your meal type" },
              ]}
            >
              <Select
                labelInValue
                defaultValue={{ value: "lucy", label: "Lucy (101)" }}
                options={[
                  {
                    value: "jack",
                    label: "Jack (100)",
                  },
                  {
                    value: "lucy",
                    label: "Lucy (101)",
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input.TextArea
                style={{ borderRadius: "0px", padding: "6px 8px" }}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              label="Meal Type"
              name="mealType"
              rules={[
                { required: true, message: "Please input your meal type" },
              ]}
            >
              <Select
                labelInValue
                defaultValue={{ value: "lucy", label: "Lucy (101)" }}
                options={[
                  {
                    value: "jack",
                    label: "Jack (100)",
                  },
                  {
                    value: "lucy",
                    label: "Lucy (101)",
                  },
                ]}
              />
            </Form.Item>

            <Form.List name="cooking">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <div
                      key={field.key}
                      style={{ marginBottom: 8 }}
                      className="grid grid-cols-12"
                      align="baseline"
                    >
                      <Form.Item
                        className="w-full col-span-11"
                        {...field}
                        label={`Item ${index + 1}`}
                        name={[field.name]}
                        rules={[
                          { required: true, message: "Please input an item!" },
                        ]}
                      >
                        <Input
                          placeholder="Enter item"
                          style={{ borderRadius: "0px", padding: "6px 8px" }}
                        />
                      </Form.Item>
                      {fields.length > 1 && (
                        <MinusCircleOutlined
                          className="ml-5"
                          onClick={() => remove(field.name)}
                          style={{ color: "red" }}
                        />
                      )}
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      style={{
                        borderRadius: "0px",
                        padding: "6px 8px",
                        marginTop: "-0px",
                      }}
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    ></Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List name="ingredients">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <div
                      key={field.key}
                      style={{ marginBottom: 8 }}
                      className="grid grid-cols-12"
                      align="baseline"
                    >
                      <Form.Item
                        className="w-full col-span-11"
                        {...field}
                        label={`Item ${index + 1}`}
                        name={[field.name]}
                        rules={[
                          { required: true, message: "Please input an item!" },
                        ]}
                      >
                        <Input
                          placeholder="Enter item"
                          style={{ borderRadius: "0px", padding: "6px 8px" }}
                        />
                      </Form.Item>
                      {fields.length > 1 && (
                        <MinusCircleOutlined
                          className="ml-5"
                          onClick={() => remove(field.name)}
                          style={{ color: "red" }}
                        />
                      )}
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      style={{
                        borderRadius: "0px",
                        padding: "6px 8px",
                        marginTop: "-0px",
                      }}
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    ></Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.List name="nutrition">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <div
                      key={field.key}
                      style={{ marginBottom: 8 }}
                      className="grid grid-cols-12"
                      align="baseline"
                    >
                      <Form.Item
                        className="w-full col-span-11"
                        {...field}
                        label={`Item ${index + 1}`}
                        name={[field.name]}
                        rules={[
                          { required: true, message: "Please input an item!" },
                        ]}
                      >
                        <Input
                          placeholder="Enter item"
                          style={{ borderRadius: "0px", padding: "6px 8px" }}
                        />
                      </Form.Item>
                      {fields.length > 1 && (
                        <MinusCircleOutlined
                          className="ml-5"
                          onClick={() => remove(field.name)}
                          style={{ color: "red" }}
                        />
                      )}
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      style={{
                        borderRadius: "0px",
                        padding: "6px 8px",
                        marginTop: "-0px",
                      }}
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    ></Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
          <div>
            <Form.Item
              label="Proparation time"
              name="Proparation"
              rules={[
                { required: true, message: "Please input your Proparation!" },
              ]}
            >
              <Input style={{ borderRadius: "0px", padding: "6px 8px" }} />
            </Form.Item>

            <Form.Item
              label="Oils"
              name="oils"
              rules={[{ required: true, message: "Please input your Oils" }]}
            >
              <Select
                labelInValue
                defaultValue={{ value: "oils", label: "Oils" }}
                options={[
                  {
                    value: "Oils",
                    label: "Oils",
                  },
                  {
                    value: "Free",
                    label: "Oil Free",
                  },
                  {
                    value: "With",
                    label: "With Oil",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Whole Food Type"
              name="mealType"
              rules={[
                { required: true, message: "Please input Whole Food Type" },
              ]}
            >
              <Select
                labelInValue
                defaultValue={{
                  value: "wholefoodType",
                  label: "Whole Food Type",
                }}
                options={[
                  {
                    value: "wholefoodType",
                    label: "Whole Food Type",
                  },
                  {
                    value: "plantBased",
                    label: "Plant Based",
                  },
                  {
                    value: "wholeFood",
                    label: "Whole Food",
                  },
                  {
                    value: "paleo",
                    label: "Paleo",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item>
              <Radio.Group
                label="Serving Temperature"
                name="radiogroup"
                defaultValue={1}
                options={[
                  { value: 1, label: "Cold" },
                  { value: 2, label: "Hot" },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <div className="flex flex-col gap-3">
                <Checkbox value="kid">Kid-Friendly</Checkbox>
                <Checkbox value="quick">
                  Quick & Easy (No Weekend Prep)
                </Checkbox>
              </div>
            </Form.Item>

            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </div>
        </div>

        <Form.Item>
          <div className="flex justify-center gap-5 mt-11">
          <button className="bg-[#495F48] px-16 py-3 text-white rounded" type="submit" htmlType="submit">
            Create
          </button>
          <button className="bg-[red] px-16 py-3 text-white rounded" >
            Cancel
          </button>
          </div>
        </Form.Item>
      </Form>
    </div>
    </div>
  );
};

export default AddRecipe;
