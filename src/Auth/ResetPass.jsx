import { Checkbox, Form, Input, message } from "antd";

const ResetPass = () => {
  const onFinish = async (values) => {
    console.log(values);

    // const data = {
    //   email: localStorage.getItem("email"),
    //   newPassword: values?.password,
    //   confirmPassword: values?.confirmPassword,
    // };

    // try {
    //   const result = await resetPassword({ data, email: data.email }).unwrap();

    //   message.success(result?.message);
    //   navigate("/login");
    // } catch (error) {
    //   message.error(error?.data?.message || "Error resetting password.");
    // }
  };
  return (
    <div className="min-h-screen  bg-[#495F48]">
      <div className=" min-h-screen flex items-center justify-center">
        <div className="">
          <div className=" md:px-16 px-5 py-16 bg-white rounded-2xl w-[600px] ">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                Set a new password
              </h2>
              <p className="pb-7">
                Create a new password. Ensure it differs from previous ones for
                security
              </p>
            </div>
            <Form
              name="reset-password"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
            >
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please set your password!" },
                  {
                    min: 8,
                    max: 10,
                    message: "Password must be 8-10 characters long!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border  rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-2 border  rounded-md"
                />
              </Form.Item>

              <Form.Item>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#495F48] text-white rounded-md"
                >
                  Reset
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ResetPass;
