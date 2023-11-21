import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const App = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQ747x1yqKZ4ipoacnZ2v93uTn8bQNvgM0Q&usqp=CAU
    " />}>
  <h2>Harry Potter: Official Christmas Cookbook</h2>
  <h3>Lily Sabri</h3>
  <a href="">Details</a>

  </Card>
);

export default App;
