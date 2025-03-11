import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import ThreadCommentList from '../components/ThreadCommentList';
import ThreadCommentInput from '../components/ThreadCommentInput';

export default function ThreadDetailPage() {
  const { id } = useParams();

  const {
    threadDetail = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [dispatch, id]);

  if (!threadDetail?.owner) return <p>Loading...</p>;

  return (
    <section>
      <ThreadDetail thread={threadDetail} />

      <ThreadCommentInput threadId={id} />

      <ThreadCommentList comments={threadDetail.comments} />
    </section>
  );
}
