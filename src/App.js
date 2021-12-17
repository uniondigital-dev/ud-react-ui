import React, { useState, useEffect } from 'react';

import { Button, AvatarList } from './components';

const users = [
  {
    avatarUrl:
      'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
  },
  {
    avatarUrl: 'https://www.w3schools.com/howto/img_avatar2.png',
  },
  {
    avatarUrl:
      'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
  },
];

function App() {
  const [count, setCount] = useState(1);

  const [user, setUser] = useState({
    name: 'Juan',
  });

  useEffect(() => {
    console.log('init');
  }, []);

  const handleClick = () => {
    console.log('clicked!');
  };

  const increment = () => {
    setCount(count + 1);
    setUser({ name: 'Sam' });
  };

  return (
    <main className="bg-white h-screen">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl text-primary">
          {user.name} ({count})
        </h1>
        <Button onClick={increment}>Pay</Button>

        <AvatarList
          users={users}
          label="2,004 community members"
          onClick={handleClick}
        />
      </div>
    </main>
  );
}

export default App;
