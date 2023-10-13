import React from "react";
// Originally labled, Button, but after some research turns out it breaks html5 rules to wrap a button in an a tag / vice versa, so renamed to website link and simply used an a tag styled as a button.
const WebsiteLink = (props) => {
  return (
    <a
      className={`bg-blue-500 h-10 px-5 rounded-sm text-white p-2 ${props.className}`}
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  );
};

export default WebsiteLink;
