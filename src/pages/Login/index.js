import React from "react";

import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex flex-col items-center justify-end mx-[auto] p-[314px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[66%]">
          <Text
            className="font-readexpro not-italic text-black_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            ADMIN
          </Text>
          <Text
            className="font-inter mt-[58px] not-italic text-bluegray_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Login as Admin
          </Text>
          <div className="flex flex-col font-inter items-center justify-start mt-[29px] w-[100%]">
            <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
              <Text
                className="not-italic text-bluegray_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Email
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="w-[100%]"
                type="email"
                name="email One"
                placeholder="jane@gmail.com"
              ></Input>
            </div>
            <div className="flex flex-col gap-[6px] items-start justify-start mt-[21px] w-[100%]">
              <Text
                className="not-italic text-bluegray_900 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Password
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                wrapClassName="w-[100%]"
                type="password"
                name="Group10198"
                placeholder="Enter Password"
                size="sm"
              ></Input>
            </div>
            <Button
              className="common-pointer cursor-pointer font-normal min-w-[528px] mt-[61px] not-italic text-[16px] text-center text-white_A700 w-[auto]"
              onClick={() => navigate("/home1")}
              size="sm"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
