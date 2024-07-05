import React from 'react';
import { Image } from 'semantic-ui-react';

export default function ImageShow({ desc, link }) {
  return <Image alt={desc} src={link} width={100} />;
}
