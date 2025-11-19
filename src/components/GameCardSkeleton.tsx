import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Skeleton height="200px" width="360px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </>
  );
};

export default GameCardSkeleton;
