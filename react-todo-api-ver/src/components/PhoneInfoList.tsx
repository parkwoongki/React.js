import React from "react";
import SimpleCard from "./SimpleCard";
import { KContent } from "../class/KContent";

interface Props {
  information: KContent[];
  onRemove(key: string): void;
  onUpdate(key: string, name: string, phone: string): void;
}

export class PhoneInfoList extends React.Component<Props> {
  render() {
    const { information, onRemove, onUpdate } = this.props;

    console.log("rendering List");
    const list = information.map((info) => (
      <SimpleCard
        info={info}
        key={info.getKey}
        onRemove={onRemove}
        onUpdate={onUpdate}
      ></SimpleCard>
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
