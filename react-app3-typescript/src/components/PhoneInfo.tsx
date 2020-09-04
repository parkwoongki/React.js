import React from "react";
import { Content } from "../class/Content";

interface Props {
  info: Content;
}

interface State {
  name: "";
  phone: "";
}

export class PhoneInfo extends React.Component<Props, State> {
  render() {
    const { info } = this.props;
    return (
      <div>
        {info.getName}, {info.getContent}
      </div>
    );
  }
}

export default PhoneInfo;
