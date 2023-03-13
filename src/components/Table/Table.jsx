import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import styles from "./Table.module.css";

const Table = ({ users, onShowModal }) => {
  const columns = [
    { field: "id", headerName: "Id", width: 50 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
  ];

  return (
    <div className={styles["table-container"]}>
      <DataGrid
        onCellClick={onShowModal}
        rows={users}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default Table;
