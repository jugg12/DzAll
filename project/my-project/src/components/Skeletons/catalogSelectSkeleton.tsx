import React from "react"
import ContentLoader from "react-content-loader"

const catalogSelectSkeleton = (props) => (
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
    <rect x="410" y="40" rx="5" ry="5" width="370" height="15" /> 
    <rect x="410" y="80" rx="5" ry="5" width="500" height="30" /> 
    <rect x="790" y="125" rx="5" ry="5" width="500" height="25" /> 
    <rect x="410" y="125" rx="5" ry="5" width="140" height="25" /> 
    <rect x="415" y="175" rx="5" ry="5" width="700" height="445" /> 
    <rect x="415" y="650" rx="5" ry="5" width="700" height="75" /> 
    
  </ContentLoader>

)

export default catalogSelectSkeleton