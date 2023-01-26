import React from "react"
import ContentLoader from "react-content-loader"

const catalogSelectSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width="1920px"
    height="100%"
    viewBox="0 0 1080 1920"
    backgroundColor="#f3f3f3"
    backgroundOpacity={1}
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="170" y="25" rx="5" ry="5" width="240" height="15" /> 
    <rect x="170" y="50" rx="5" ry="5" width="280" height="25" /> 
    <rect x="445" y="85" rx="5" ry="5" width="205" height="20" /> 
    <rect x="170" y="85" rx="5" ry="5" width="140" height="20" /> 
    <rect x="175" y="125" rx="5" ry="5" width="475" height="320" /> 
    <rect x="175" y="470" rx="5" ry="5" width="475" height="65" /> 
    <rect x="0" y="555" rx="5" ry="5" width="1920" height="437" /> 
    
  </ContentLoader>

)

export default catalogSelectSkeleton