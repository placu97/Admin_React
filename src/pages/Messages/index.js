import React from "react";

import { Img, Text, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const MessagesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-readexpro md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[350px]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-gray_51 border border-bluegray_100 border-solid flex flex-col items-center justify-end p-[10px] w-[100%]">
              <div className="flex flex-col gap-[33px] justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[96%]">
                <div className="flex flex-row gap-[32px] items-center justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                  <div className="bg-blue_A700 flex flex-col items-start justify-start p-[11px] rounded-radius10 w-[20%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="common-pointer h-[12px] md:ml-[0] sm:ml-[0] ml-[8px] w-[auto]"
                      onClick={() => navigate(-1)}
                      alt="arrowleft"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start pt-[2px] px-[2px] w-[69%]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      ADMIN
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-inter items-start justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[97%]">
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Message
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[16px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 border border-bluegray_300 border-solid flex flex-row items-center justify-between p-[15px] rounded-radius8 w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Search people or message
                        </Text>
                        <Img
                          src="images/img_search.svg"
                          className="h-[20px] mt-[2px] p-[] pb-[] pl-[] pr-[] pt-[] w-[20px]"
                          alt="search"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-center justify-start mt-[24px] w-[100%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Design Group
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_50x50.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge One"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Rose J. Henry
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_1.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Two"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start ml-[16px] mt-[4px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Kai Caudle
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_2.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Three"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start ml-[16px] mt-[4px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Ali Comer
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_3.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Four"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Jacklyn Kovach
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_4.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Five"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Landon Mosby
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_5.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Six"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start ml-[16px] mt-[4px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Man Marin
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_6.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Seven"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start ml-[16px] mt-[4px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Benito Nickel
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_7.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Eight"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Angelyn Weiner
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_8.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Nine"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anton Ligon
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge_9.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Ten"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start ml-[16px] mt-[4px] w-[48%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Carmelo Rousseau
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[37px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Eleven"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Design Group
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Img
                        src="images/img_profileimglarge.png"
                        className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                        alt="ProfileImgLarge Twelve"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start ml-[16px] mt-[6px] w-[44%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Design Group
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Angelyn Weiner: Ok
                        </Text>
                      </div>
                      <Text
                        className="ml-[48px] mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        10:05 am
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 font-inter h-[1081px] md:h-[1415px] sm:h-[1415px] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] gap-[] gap-x-[] gap-y-[] items-center justify-start mb-[auto] ml-[auto] mr-[auto] mt-[50px] mx-[auto] p-[] pb-[] pl-[] pr-[] pt-[] md:w-[100%] sm:w-[100%] w-[99%]">
              <div className="flex flex-col h-[50px] items-center justify-start m-[0] mb-[0] ml-[0] mr-[0] mt-[0] p-[0] pb-[0] pl-[0] pr-[0] pt-[0] w-[100px]">
                <Img
                  src="images/img_profileimglarge_50x50.png"
                  className="h-[50px] md:h-[auto] sm:h-[auto] pb-[] pl-[] pr-[] pt-[] rounded-radius50 w-[50px]"
                  alt="ProfileImgLarge Thirteen"
                />
              </div>
              <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] md:w-[100%] sm:w-[100%] w-[12%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="not-italic text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Rose J. Henry
                    </Text>
                  </div>
                </div>
                <Text
                  className="not-italic text-bluegray_300 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  @rosie
                </Text>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="h-[24px] md:ml-[0] sm:ml-[0] ml-[818px] w-[24px]"
                alt="overflowmenu"
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[11px] mt-[54px] md:w-[100%] sm:w-[100%] w-[23%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[12px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group4.svg')" }}
              >
                <Text
                  className="mr-[6px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Hi Jake, how are you?
                </Text>
              </div>
              <Text
                className="not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Yesterday, 2:01pm
              </Text>
            </div>
            <div className="flex flex-col gap-[8px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[654px] mt-[30px] md:w-[100%] sm:w-[100%] w-[37%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[8px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group10282.svg')" }}
              >
                <div className="h-[356px] md:h-[auto] sm:h-[auto] relative w-[356px]">
                  <Img
                    src="images/img_rectangle12.png"
                    className="h-[356px] m-[auto] object-cover rounded-radius5 w-[356px]"
                    alt="RectangleTwelve"
                  />
                  <div className="absolute bottom-[4%] h-[30px] md:h-[auto] sm:h-[auto] right-[4%] w-[20%]">
                    <div className="absolute bg-gradient  h-[26px] inset-[0] justify-center m-[auto] rounded-radius2 w-[100%]"></div>
                    <Text
                      className="absolute font-normal h-[max-content] inset-y-[0] left-[23%] my-[auto] not-italic text-left text-white_A700 w-[31px]"
                      as="h5"
                      variant="h5"
                    >
                      01:54
                    </Text>
                  </div>
                  <Button
                    className="absolute flex h-[56px] inset-[0] items-center justify-center m-[auto] rounded-radius50 w-[56px]"
                    variant="icbGradientBlack90066Black90066"
                  >
                    <Img
                      src="images/img_playsolid.svg"
                      className="h-[32px]"
                      alt="playSolid"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[23%]">
                <Text
                  className="mb-[2px] mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  2:01 pm
                </Text>
                <Img
                  src="images/img_doneall.svg"
                  className="h-[24px] w-[24px]"
                  alt="doneall"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[8px] mt-[30px] md:w-[100%] sm:w-[100%] w-[30%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[12px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group4.svg')" }}
              >
                <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mr-[6px] md:w-[100%] sm:w-[100%] w-[91%]">
                  <Img
                    src="images/img_playsolid_blue_a700.svg"
                    className="h-[32px] w-[32px]"
                    alt="playSolid One"
                  />
                  <div className="h-[16px] md:h-[auto] sm:h-[auto] relative w-[58%]">
                    <div
                      className="absolute h-[6px] inset-[0] justify-center m-[auto] overflow-hidden w-[100%]"
                      name="GroupEight"
                    >
                      <div className="w-full h-full absolute bg-bluegray_200 rounded-[3px]"></div>
                      <div
                        className="h-full absolute bg-blue_A700  rounded-[3px]"
                        style={{ width: "38%" }}
                      ></div>
                    </div>
                    <div className="absolute bg-white_A700 border-blue_A700 border-bw3 border-solid h-[16px] inset-y-[0] left-[32%] my-[auto] rounded-radius50 w-[16px]"></div>
                  </div>
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    01:54
                  </Text>
                </div>
              </div>
              <Text
                className="not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                3:02 pm
              </Text>
            </div>
            <div className="flex flex-col gap-[9px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[467px] mt-[30px] md:w-[100%] sm:w-[100%] w-[55%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[10px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group10282.svg')" }}
              >
                <Text
                  className="my-[2px] not-italic text-black_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Great I will write later the exact time and place. See you
                  soon!
                </Text>
              </div>
              <div className="flex flex-row items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[14%]">
                <Text
                  className="mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  3:02 pm
                </Text>
                <Img
                  src="images/img_doneall.svg"
                  className="h-[16px] mb-[3px] ml-[4px] w-[16px]"
                  alt="doneall One"
                />
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-center justify-start mb-[8px] md:ml-[0] sm:ml-[0] ml-[11px] mt-[145px] md:w-[100%] sm:w-[100%] w-[99%]">
              <div className="bg-white_A700 border border-bluegray_100 border-solid flex flex-col items-center justify-start p-[12px] rounded-radius6 md:w-[100%] sm:w-[100%] w-[95%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[24px] w-[24px]"
                    alt="user"
                  />
                  <Text
                    className="md:ml-[0] sm:ml-[0] ml-[16px] md:mt-[0] sm:mt-[0] mt-[6px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Your message....
                  </Text>
                  <Img
                    src="images/img_plus.svg"
                    className="h-[24px] md:ml-[0] sm:ml-[0] ml-[727px] p-[] pb-[] pl-[] pr-[] pt-[] w-[24px]"
                    alt="plus"
                  />
                  <Img
                    src="images/img_microphone.svg"
                    className="h-[24px] md:ml-[0] sm:ml-[0] ml-[16px] w-[24px]"
                    alt="microphone"
                  />
                </div>
              </div>
              <Button
                className="flex h-[48px] items-center justify-center p-[] pb-[] pl-[] pr-[] pt-[] w-[48px]"
                shape="icbRoundedBorder6"
                variant="icbOutlineBluegray100"
              >
                <Img
                  src="images/img_send.svg"
                  className="h-[24px]"
                  alt="send"
                />
              </Button>
            </div>
          </div>
          <Line className="absolute bg-bluegray_100 h-[1px] inset-x-[0] mx-[auto] top-[9%] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
