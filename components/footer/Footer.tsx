import React from "react";
import { Separator } from "../ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full">
      <Separator />
      <div className="py-4 text-white text-center">© 2024 iTv Entertainment</div>
    </div>
  );
};

export default Footer;
