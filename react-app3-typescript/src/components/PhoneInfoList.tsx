import React from "react";
import { Content } from "../class/Content";
import PhoneInfo from "./PhoneInfo";

interface Props {
  information: Content[];
}

export default class PhoneInfoList extends React.Component<Props> {
  render() {
    const { information } = this.props;

    console.log("rendering List");
    const list = information.map((info) => (
      <PhoneInfo info={info} key={info.getId}></PhoneInfo>
    ));
    return <div>{list}</div>;
  }
}
