import React, { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import Auth from "./components/Auth";

const App = () => {
  const userEmail = "josem@gmail.com";
  const [tasks, setTasks] = useState(null);

  const authToken = true;

  const getData = async () => {
    try {
      // something here is missing that is bring back an empty array V
      const response = await fetch(
        `${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`
      );
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  // console.log(tasks);

  //sort by date
  const sortedTasks = tasks?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="app">
      {!authToken && <Auth />}
      {authToken && (
        <>
          <ListHeader listName={"Holiday tick"} getData={getData} />
          {sortedTasks?.map((task) => (
            <ListItem key={task.id} task={task} getData={getData} />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
