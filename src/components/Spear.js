import React, {useEffect} from 'react';

const TagCloud = require('TagCloud');
const container = '.tagcloud';
const texts = [ "Ruby", "HTML", "CSS", "JS", "AJAX", "Heroku", "React JS", "Rails", "PostgreSQL", "MySQL", "SASS", "REST", "GRAPHQL", "AWS" ];
const options = {
  radius: 380,
  initSpeed: 'fast',
  maxSpeed: 'fast',
  direction: 145
};
const style={
  color: '#08fdd8',
  fontWeight: 'bold',
  fontFamily: 'cursive',
  fontSize: '25px'
}
const Spear = () => {
  useEffect(() => {
    TagCloud(container, texts, options);
  });
  return(
    <div className='d-flex justify-content-center'>
      <div className='tagcloud' style={style}></div>
    </div>
  )
};

export default Spear;