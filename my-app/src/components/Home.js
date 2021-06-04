import React, { useState } from "react";
import { Row, Col, Sonnet, Tabs, Tab } from "react-bootstrap";
import { isMobile, isTablet } from "react-device-detect";
import Budget from "./Budget";
import ReportTable from "./ReportTable";
import TableReport from "./TableReport";
import { Chip } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Nav, NavDropdown, Navbar, Breadcrumb } from "react-bootstrap";

import { BiCog } from "react-icons/bi";
import ExploreIcon from "@material-ui/icons/Explore";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "react-pro-sidebar/dist/css/styles.css";
import "./Home.css";
import { Divider, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [ShowBudget, setShowBudget] = useState([
    {
      budget: "Buget1",
      price: "$10,000",
      discount: "2% above anuual budget",
    },
    {
      budget: "Buget2",
      price: "$20,000",
      discount: "2.3% above  budget",
    },
    {
      budget: "Buget3",
      price: "$30,000",
      discount: "2.5% above  budget",
    },
    {
      budget: "Buget4",
      price: "$40,000",
      discount: "5.5% below  budget",
    },
    {
      budget: "Buget5",
      price: "$50,000",
      discount: "6.5% below  budget",
    },
    {
      budget: "Buget6",
      price: "$60,000",
      discount: "1.5% below  budget",
    },
    {
      budget: "Buget7",
      price: "$70,000",
      discount: "4.5% less than last  budget",
    },
  ]);

  return (
    <>
      <div className="main-div ">
        <div id="header">
          <ProSidebar collapsed={menuCollapse}>
            <SidebarHeader></SidebarHeader>
            <SidebarContent>
              <Menu>
                <MenuItem>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      background: "black",
                      width: "5px",
                      height: "60px",
                      position: "absolute",
                      left: 0,
                      top: -14,
                    }}
                  />
                  <span>
                    <ExploreIcon />
                  </span>
                </MenuItem>
                <MenuItem>
                  <AttachMoneyIcon />
                </MenuItem>
                <MenuItem>
                  <HelpIcon />
                </MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem className="setting" icon={<BiCog />}></MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
        <div>
          <Navbar bg="light" className="ml-5">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home"></Nav.Link>
                <Nav.Link href="#link"></Nav.Link>
                <NavDropdown
                  title="Select a Department"
                  className="mr-5"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Banking
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Gold Finance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    BitCoin Dashboard
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav.Link href="#en">EN</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="finance breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Financial Overview</Breadcrumb.Item>
          </Breadcrumb>
          {isTablet ? (
            <div className="sheetTab">Sheet 1</div>
          ) : isMobile ? (
            <div className="sheetMob">Sheet 1</div>
          ) : (
            <div className="sheet">Sheet 1</div>
          )}
          <div
            className="col-md col-sm col-xs offset-xs-2"
            style={{
              display: "flex",
              flexDirection: isTablet ? "row" : isMobile ? "column" : "row",
              marginTop: isTablet ? "" : " 6%",
              marginLeft: isTablet ? "0px" : "-5%",
            }}
          >
            {ShowBudget.map((val, i) => {
              return (
                <div
                  className="card-div"
                  style={{
                    width: isMobile ? "250px" : "200px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="budget">{val.budget}</div>
                  <div className="price">{val.price}</div>
                  <div className="budget">{val.discount}</div>
                </div>
              );
            })}
          </div>

          {/* //chip ------------ */}
          <div className=" breadcrumb mt-3 ml-2">
            <Chip icon={<ExpandMoreIcon />} label="Custom Data Range" />
          </div>
          {/* tab for record */}

          <div
            style={{
              marginTop: isTablet ? "10%" : isMobile ? "" : "5%",
              marginLeft: isTablet ? "-32%" : isMobile ? "" : "-13%",
            }}
          >
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Report 1
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Report 2
                </a>
              </li>
            </ul>
          </div>
          <TableReport />

          <div
            className="mt-3 float-right "
            style={{ marginLeft: isTablet ? "70%" : isMobile ? "28%" : "85%" }}
          >
            <Pagination
              count={4}
              variant="outlined"
              shape="rounded"
              color="primary"
              hidePrevButton
              page={page}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
