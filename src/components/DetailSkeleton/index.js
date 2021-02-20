import ContentLoader from 'react-content-loader'

export const DetailSkeleton = props => (
  <ContentLoader
    viewBox="0 0 400 600"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="-103" y="2" rx="30" ry="30" width="635" height="250" /> 
    <rect x="45" y="347" rx="5" ry="5" width="219" height="27" /> 
    <rect x="53" y="389" rx="0" ry="0" width="44" height="15" /> 
    <rect x="110" y="388" rx="0" ry="0" width="57" height="15" /> 
    <rect x="149" y="392" rx="0" ry="0" width="1" height="9" /> 
    <rect x="182" y="388" rx="0" ry="0" width="45" height="15" /> 
    <rect x="53" y="431" rx="0" ry="0" width="88" height="20" /> 
    <rect x="158" y="432" rx="0" ry="0" width="122" height="20" /> 
    <rect x="53" y="514" rx="0" ry="0" width="160" height="19" /> 
    <rect x="60" y="549" rx="0" ry="0" width="277" height="10" /> 
    <rect x="62" y="566" rx="0" ry="0" width="263" height="9" /> 
    <rect x="66" y="585" rx="0" ry="0" width="241" height="10" />
  </ContentLoader>
);
