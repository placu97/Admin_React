import React from "react";

import { Text, Line, Img } from "components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_50 flex md:flex-col sm:flex-col flex-row font-readexpro md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[300px]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-white_A700 flex flex-col gap-[48px] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start pt-[2px] px-[2px] md:w-[100%] sm:w-[100%] w-[66%]">
                <Text
                  className="not-italic text-black_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  ADMIN
                </Text>
              </div>
              <div className="flex flex-col font-opensans md:gap-[40px] sm:gap-[40px] gap-[808px] items-start justify-start mb-[24px] md:w-[100%] sm:w-[100%] w-[44%]">
                <div className="flex flex-col gap-[43px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                    <Line className="bg-blue_A700 h-[24px] w-[2px]" />
                    <Img
                      src="images/img_home.svg"
                      className="h-[24px] ml-[6px] w-[24px]"
                      alt="home"
                    />
                    <Text
                      className="font-semibold ml-[8px] text-blue_A700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Home
                    </Text>
                  </div>
                  <div
                    className="common-pointer flex flex-row font-inter gap-[8px] items-end justify-start w-[100%]"
                    onClick={() => navigate("/messages")}
                  >
                    <Img
                      src="images/img_menu.svg"
                      className="h-[24px] w-[24px]"
                      alt="menu"
                    />
                    <Text
                      className="font-normal mt-[5px] not-italic text-bluegray_700 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-end justify-start md:w-[100%] sm:w-[100%] w-[62%]">
                  <Img
                    src="images/img_question.svg"
                    className="h-[24px] w-[24px]"
                    alt="question"
                  />
                  <Text
                    className="font-semibold mt-[5px] text-bluegray_700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Help
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray_50 flex flex-1 flex-col font-inter items-center justify-start p-[30px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[37px] items-center justify-start mb-[380px] mt-[2px] w-[100%]">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
                <div className="header-row mt-[12px] mb-[11px]">
                  <Text
                    className="not-italic text-bluegray_900 text-left"
                    as="h1"
                    variant="h1"
                  >
                    Home
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col font-opensans h-[56px] sm:hidden items-end justify-start md:ml-[0] ml-[851px] p-[8px] rounded-radius50 w-[56px]">
                  <div className="h-[35px] md:h-[36px] sm:h-[36px] mb-[4px] relative w-[36px]">
                    <Img
                      src="images/img_notification.svg"
                      className="absolute bottom-[0] h-[32px] left-[0] w-[32px]"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red_700 border border-bluegray_50 border-solid h-[18px] pb-[5px] pt-[2px] px-[5px] right-[0] rounded-radius50 text-left text-white_A700 top-[0] w-[18px]"
                      variant="body1"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue_A701 border-solid flex flex-col h-[56px] sm:hidden items-center justify-start md:ml-[0] ml-[24px] p-[4px] rounded-radius50 w-[56px]">
                  <Img
                    src="images/img_profileimglargeborder.png"
                    className="h-[48px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[48px]"
                    alt="ProfileImgLargeBorder"
                  />
                </div>
              </div>
            </header>
            <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-col gap-[18px] justify-start md:ml-[0] sm:ml-[0] ml-[30px] md:w-[100%] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-normal md:ml-[0] sm:ml-[0] ml-[18px] not-italic text-blue_A700 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Hello Admin
                  </Text>
                  <Line className="bg-blue_A700 h-[2px] w-[100%]" />
                </div>
                <Line className="bg-gray_300 h-[1px] w-[100%]" />
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-start p-[30px] sm:px-[20px] rounded-radius8 w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mb-[383px] md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[70%]">
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Last Access to this Admin Panel:{" "}
                  </Text>
                  <Text
                    className="md:ml-[0] sm:ml-[0] ml-[44px] not-italic text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    12:32:11
                  </Text>
                  <Text
                    className="md:ml-[0] sm:ml-[0] ml-[47px] not-italic text-black_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    07/08/2023
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
