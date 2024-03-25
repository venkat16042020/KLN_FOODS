import React from "react";
import { shallow } from "enzyme";
import PreparationVideos from "./PreparationVideos";

describe("PreparationVideos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PreparationVideos />);
    expect(wrapper).toMatchSnapshot();
  });
});
