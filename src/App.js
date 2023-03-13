import "./App.css";
import { useGetUsersQuery } from "./store/jsonServerApi";

import Table from "./components/Table/Table";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [modalData, setModalData] = useState(null);

  const showModleHandler = (user) => setModalData(user);
  const hideModalHandler = () => setModalData(null);

  const {
    data: users = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetUsersQuery();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }
  return (
    <div className="app">
      {modalData && <Modal data={modalData} onHideModal={hideModalHandler} />}
      <Table users={users} onShowModal={showModleHandler} />
    </div>
  );
}

export default App;
