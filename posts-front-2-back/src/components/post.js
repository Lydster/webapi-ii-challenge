import React from "react";
import { Row, Col, Card } from "react-materialize";

const Post = props => {
  return (
    <div className="post">
      <Row>
        <Col m={6} s={12}>
          <Card className="teal">
            <span className="white-text">
              <h6>{props.post.title}</h6>
            </span>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Post;
