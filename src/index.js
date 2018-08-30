import React from 'react';
import wrapComponent from './component';

try {
  wrapComponent(function () {
    return <div>Hello world</div>;
  });
  console.log("success");
} catch (ex) {
  console.log("error", ex);
}