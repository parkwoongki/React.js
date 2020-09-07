import React from "react";
import { Content } from "../class/Content";
import SimpleCard from "./SimpleCard";

interface Props {
  information: Content[];
  onRemove(id: number): void;
  onUpdate(id: number, name: string, phone: string): void;
}

export class PhoneInfoList extends React.Component<Props> {
  render() {
    const { information, onRemove, onUpdate } = this.props;

    console.log("rendering List");
    const list = information.map((info) => (
      <SimpleCard
        info={info}
        key={info.getId}
        onRemove={onRemove}
        onUpdate={onUpdate}
      ></SimpleCard>
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
