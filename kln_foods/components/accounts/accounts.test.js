import React from "react";
import { shallow } from "enzyme";
import Accounts from "./accounts";

describe("Accounts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Accounts />);
    expect(wrapper).toMatchSnapshot();
  });
});
