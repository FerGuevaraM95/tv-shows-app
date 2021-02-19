import ContentLoader from 'react-content-loader'

export const ShowListSkeleton = props => (
  <ContentLoader
    viewBox="0 0 450 400"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="115" y="9" rx="30" ry="30" width="224" height="340" /> 
    <rect x="145" y="367" rx="3" ry="3" width="168" height="20" />
  </ContentLoader>
);
