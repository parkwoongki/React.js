import React from "react";
import { Content } from "../class/Content";
import PhoneInfo from "./PhoneInfo";

interface Props {
  information: Content[];
  onRemove(id: number): void;
  onUpdate(id: number, name: string, phone: string): void;
}

export default class PhoneInfoList extends React.Component<Props> {
  render() {
    const { information, onRemove, onUpdate } = this.props;

    console.log("rendering List");
    const list = information.map((info) => (
      <PhoneInfo
        info={info}
        key={info.getId}
        onRemove={onRemove}
        onUpdate={onUpdate}
      ></PhoneInfo>
    ));
    return <div>{list}</div>;
  }
}
