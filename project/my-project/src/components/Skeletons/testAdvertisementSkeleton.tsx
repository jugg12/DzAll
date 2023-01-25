import React from "react"
import ContentLoader from "react-content-loader"

const testAdvertisementSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width="1370px"
    height="100%"
    viewBox="0 0 1080 1400"
    backgroundColor="#f3f3f3"
    backgroundOpacity={1}
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="635" y="35" rx="5" ry="5" width="230" height="20" /> 
    <rect x="410" y="60" rx="5" ry="5" width="170" height="15" /> 
    <rect x="410" y="100" rx="5" ry="5" width="500" height="30" /> 
    <rect x="790" y="145" rx="5" ry="5" width="500" height="20" /> 
    <rect x="410" y="145" rx="5" ry="5" width="120" height="20" /> 
    <rect x="415" y="195" rx="5" ry="5" width="700" height="445" /> 
    <rect x="415" y="670" rx="5" ry="5" width="700" height="75" /> 
    
  </ContentLoader>
  

  
)

export default testAdvertisementSkeleton