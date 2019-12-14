import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { timer } from "rxjs";
import { map, debounce } from "rxjs/operators";
import { Error, Loading, Post } from "..";
import { SearchPostsService } from "../../services";
import { SEARCH_POSTS_QUERY } from "../../graphql/queries";

interface IPostsProps {}

const Posts: React.FC<IPostsProps> = () => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const searchValue$ = SearchPostsService.searchValue()
      .pipe(
        debounce(() => timer(500)),
        map(value => setSearchValue(value))
      )
      .subscribe();
    return () => searchValue$.unsubscribe();
  });

  const { loading, error, data } = useQuery(SEARCH_POSTS_QUERY, {
    variables: { searchValue }
  });

  if (loading) {
    return <Loading />;
  }

  if (error || !data.posts.edges.length) {
    return <Error message={"Posts not found :("} />;
  }

  return data.posts.edges.map((edge: any) => (
    <Post key={edge.node.postId} post={edge.node} />
  ));
};

export default Posts;
