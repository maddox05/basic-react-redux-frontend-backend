import React, { useState } from 'react';
import ImageShow from './ImageShow';
import { Segment } from 'semantic-ui-react';

/**
 *
 * @param {Array} arr array of a certain object to pass in
 * @returns {Array[React.Component]}
 */
function imagesToImageShow(arr) {
  return arr.map(function (value, index) {
    return <ImageShow desc={value.desc} link={value.link} key={value.id}></ImageShow>;
  });
}

export default function ImageList({ objList }) {
  return (
    <Segment style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      {imagesToImageShow(objList)}
    </Segment>
  );
}
