import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Radio,
  Select,
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
  const onChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {
    form.setFieldsValue({ cooking: [""], ingredients: [""], nutrition: [""] });
  }, [form]);

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="p-1">
      <Navigate title="Add Recipe" />
      <div id="recipe" className="p-5 mt-4 bg-white h-screen">
        <Form
          form={form}
          name="dynamic_form"
          onFinish={onFinish}
          layout="vertical"
        >
          <div className="grid grid-cols-3 gap-11">
            {/* Left Column */}
            <div>
              <Form.Item
                label="Recipe Name"
                name="name"
                rules={[{ required: true, message: "Please input recipe name!" }]}
              >
                <Input placeholder="Enter recipe name" />
              </Form.Item>

              <Form.Item
                label="Meal Type"
                name="mealType"
                rules={[{ required: true, message: "Please select meal type" }]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select Meal Type" }}
                  options={[
                    { value: "breakfast", label: "Breakfast" },
                    { value: "lunch", label: "Lunch" },
                    { value: "dinner", label: "Dinner" },
                    { value: "appetizers", label: "Appetizers" },
                    { value: "sides", label: "Sides" },
                    { value: "soup", label: "Soup" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Weight Goal"
                name="weightGoal"
                rules={[{ required: true, message: "Please select weight goal" }]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select Goal" }}
                  options={[
                    { value: "weight_loss", label: "Weight Loss" },
                    { value: "muscle_gain", label: "Muscle Gain" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Serving Size"
                name="serving"
                rules={[{ required: true, message: "Please input serving size" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Flavour Type"
                name="flavourType"
                rules={[{ required: true, message: "Please select flavour type" }]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select Flavour" }}
                  options={[
                    { value: "sweet", label: "Sweet" },
                    { value: "savory", label: "Savory" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Prep Instructions"
                name="prep"
                rules={[{ required: true, message: "Please input prep steps" }]}
              >
                <Input.TextArea />
              </Form.Item>
            </div>

            {/* Middle Column */}
            <div>
              <Form.Item
                label="Ethnic/Holiday Recipes"
                name="holidayRecipe"
                rules={[{ required: true, message: "Please select a recipe category" }]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select Type" }}
                  options={[
                    { value: "arabic", label: "Arabic" },
                    { value: "bbq", label: "Backyard BBQ" },
                    { value: "christmas", label: "Christmas" },
                    { value: "french", label: "French" },
                  ]}
                />
              </Form.Item>

              <Form.List name="cooking">
                {(fields, { add, remove }) => (
                  <>
                    <div className="pb-2">Cooking Instructions</div>
                    {fields.map((field) => (
                      <div key={field.key} className="grid grid-cols-12 mb-2">
                        <Form.Item
                          className="col-span-11"
                          {...field}
                          name={[field.name]}
                          rules={[{ required: true, message: "Required" }]}
                        >
                          <Input />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                            className="ml-5 text-red-500"
                          />
                        )}
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Instruction
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <Form.List name="ingredients">
                {(fields, { add, remove }) => (
                  <>
                    <div className="pb-2">Ingredients</div>
                    {fields.map((field) => (
                      <div key={field.key} className="grid grid-cols-12 mb-2">
                        <Form.Item
                          className="col-span-11"
                          {...field}
                          name={[field.name]}
                          rules={[{ required: true, message: "Required" }]}
                        >
                          <Input />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                            className="ml-5 text-red-500"
                          />
                        )}
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Ingredient
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <Form.List name="nutrition">
                {(fields, { add, remove }) => (
                  <>
                    <div className="pb-2">Nutrition Info</div>
                    {fields.map((field) => (
                      <div key={field.key} className="grid grid-cols-12 mb-2">
                        <Form.Item
                          className="col-span-11"
                          {...field}
                          name={[field.name]}
                          rules={[{ required: true, message: "Required" }]}
                        >
                          <Input />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined
                            onClick={() => remove(field.name)}
                            className="ml-5 text-red-500"
                          />
                        )}
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()} block icon={<PlusOutlined />}>
                        Add Nutrition Item
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>

            {/* Right Column */}
            <div>
              <Form.Item
                label="Preparation Time"
                name="preparation"
                rules={[{ required: true, message: "Please input preparation time" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Oils"
                name="oils"
                rules={[{ required: true, message: "Please select oil type" }]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select" }}
                  options={[
                    { value: "free", label: "Oil Free" },
                    { value: "with", label: "With Oil" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Whole Food Type"
                name="wholeFoodType"
                rules={[{ required: true, message: "Please select food type" }]}
              >
                <Select
                  labelInValue
                  defaultValue={{ value: "", label: "Select Type" }}
                  options={[
                    { value: "plant", label: "Plant Based" },
                    { value: "whole", label: "Whole Food" },
                    { value: "paleo", label: "Paleo" },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Serving Temp" name="temperature">
                <Radio.Group
                  options={[
                    { value: "cold", label: "Cold" },
                    { value: "hot", label: "Hot" },
                  ]}
                />
              </Form.Item>

              <Form.Item name="tags" label="Tags">
                <Checkbox.Group
                  options={[
                    { label: "Kid-Friendly", value: "kid" },
                    { label: "Quick & Easy", value: "quick" },
                  ]}
                />
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
              <button
                className="bg-[#495F48] px-16 py-3 text-white rounded"
                type="submit"
              >
                Create
              </button>
              <button className="bg-red-500 px-16 py-3 text-white rounded" type="button">
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