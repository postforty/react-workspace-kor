import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";

const API_URL = "https://swapi.dev/api/people/";

const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

function InfinitePeople() {
  // useEffect(() => {
  //   fetchUrl(API_URL).then((data) => console.log(data));
  // }, []);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["sw-people"],
    queryFn: ({ pageParam = API_URL }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => lastPage.next || undefined,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error : {error.message}</div>;
  }

  // console.log("data>>> ", data);

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      <InfiniteScroll
        loadMore={() => {
          if (!isFetching) {
            fetchNextPage();
          }
        }}
        hasMore={hasNextPage}
      >
        {data.pages.map((page) =>
          page.results.map((person) => {
            // console.log(person);
            const {
              eye_color: eyeColor,
              gender,
              hair_color: hairColor,
              skin_color: skinColor,
              name,
            } = person;

            return (
              <div key={name}>
                <h3>{name}</h3>
                <p>gender: {gender}</p>
                <p>hair: {hairColor}</p>
                <p>eye color: {eyeColor}</p>
                <p>skin color: {skinColor}</p>
              </div>
            );
          })
        )}
      </InfiniteScroll>
    </div>
  );
}

export default InfinitePeople;
