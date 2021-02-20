
export const orderShows = (shows = {} , by) => {
  if(by === "recent") {
    const orderResults = shows.results || [];
    orderResults.sort((a, b) => {
      return (b.id  - a.id)
    });
    
    return {...shows, results: orderResults};
  };
  if(by === "alphabeical") {
    const orderResults = shows.results.sort((a, b) => (a.name  > b.name) * 2 - 1);
    return {...shows, results: orderResults};
  };
  if(by === "punctuation") {
    const orderResults = shows.results.sort((a, b) => {
      return (b.vote_average  - a.vote_average)
    });
    return {...shows, results: orderResults};
  };
};
