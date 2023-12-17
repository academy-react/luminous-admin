// ** User List Component
import Table from "./Table";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Custom Components
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal";

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from "react-feather";

// ** Styles
import "@styles/react/apps/app-users.scss";
import { getUsersList } from "../../core/services/api/get/user/get-user-lists.api";
import { useEffect } from "react";
import { useState } from "react";

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const isActive = userList.filter((user) => user.active !== false);
  const isDisActive = userList.filter((user) => user.active === false);
  const isTeacher = userList.filter((user) => user.isTeacher !== false);
  console.log(isActive.length);
  useEffect(() => {
    const getUsers = async () => {
      const response = await getUsersList();
      setUserList(response.listUser);
      setTotalCount(response.totalCount);
      console.log(setUserList);
    };
    getUsers();
  }, []);

  return (
    <div className="app-user-list">
      <Row>
        <Col lg="3" sm="6">
          <StatsHorizontal
            color="primary"
            statTitle="تعداد کاربران"
            icon={<User size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">{totalCount}</h3>}
          />
        </Col>
        <Col lg="3" sm="6">
          <StatsHorizontal
            color="danger"
            statTitle="کاربران غیرفعال "
            icon={<UserPlus size={20} />}
            renderStats={
              <h3 className="fw-bolder mb-75">{isDisActive.length}</h3>
            }
          />
        </Col>
        <Col lg="3" sm="6">
          <StatsHorizontal
            color="success"
            statTitle="کاریران فعال "
            icon={<UserCheck size={20} />}
            renderStats={<h3 className="fw-bolder mb-75">{isActive.length}</h3>}
          />
        </Col>
        <Col lg="3" sm="6">
          <StatsHorizontal
            color="warning"
            statTitle="تعداد اساتید "
            icon={<UserX size={20} />}
            renderStats={
              <h3 className="fw-bolder mb-75">{isTeacher.length}</h3>
            }
          />
        </Col>
      </Row>
      <Table />
    </div>
  );
};

export default UsersList;
