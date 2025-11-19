import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Skeleton height="220px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </>
  );
};

export default GameCardSkeleton;
