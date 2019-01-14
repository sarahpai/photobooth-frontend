import React from 'react';



class DemoGlasses extends React.Component {
  
  componentDidMount() {
  const filter = import('../libraries/dist/jeelizFaceFilterES6.js');
  const matrix = import('../libraries/dist/THREEMatrix');
  const NNC = import('../libraries/dist/NNC.json');
  const demo = import('../libraries/dist/demo_comedyGlasses.js')
  }

  render() {
    return (
      <div> WEbcamJSX</div>
    )
  }
}
export default DemoGlasses;

