import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(
  sno,
  account,
  item,
  thisperiod,
  budgetPerMonth,
  varianceMonth,
  ActualYTD,
  BudgetYTD,
  varianceYTD
) {
  return {
    sno,
    account,
    item,
    thisperiod,
    budgetPerMonth,
    varianceMonth,
    ActualYTD,
    BudgetYTD,
    varianceYTD,
    history: [
      {
        sno: "1.1",
        account: "5000100000",
        item: "Iteam 1",
        thisperiod: "23,30,000",
        budgetPerMonth: "23,000",
        varianceMonth: "130.50",
        ActualYTD: "1,00,000.5",
        BudgetYTD: "20,00,000.6",
        varianceYTD: "40,00,500",
      },
      {
        sno: "2.1",
        account: "5000100000",
        item: "Iteam 2",
        thisperiod: "23,30,000",
        budgetPerMonth: "23,000",
        varianceMonth: "130.50",
        ActualYTD: "1,00,000.5",
        BudgetYTD: "20,00,000.6",
        varianceYTD: "40,00,500",
      },
      {
        sno: "3.1",
        account: "5000300000",
        item: "Iteam 3",
        thisperiod: "23,30,000",
        budgetPerMonth: "23,000",
        varianceMonth: "130.50",
        ActualYTD: "1,00,000.5",
        BudgetYTD: "20,00,000.6",
        varianceYTD: "40,00,500",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.sno}
        </TableCell>
        <TableCell align="right">{row.account}</TableCell>
        <TableCell align="right">{row.item}</TableCell>
        <TableCell align="right">{row.thisperiod}</TableCell>
        <TableCell align="right">{row.budgetPerMonth}</TableCell>
        <TableCell align="right">{row.varianceMonth}</TableCell>
        <TableCell align="right">{row.ActualYTD}</TableCell>
        <TableCell align="right">{row.BudgetYTD}</TableCell>
        <TableCell align="right">{row.varianceYTD}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={20}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.history.map((val, i) => (
              <Table size="small" aria-label="purchases">
                <TableCell>{val.sno}</TableCell>
                <TableCell align="right">{val.account}</TableCell>
                <TableCell align="right">{val.item}</TableCell>
                <TableCell align="right">{val.thisperiod}</TableCell>
                <TableCell align="right">{val.budgetPerMonth}</TableCell>
                <TableCell align="right">{val.varianceMonth}</TableCell>
                <TableCell align="right">{val.ActualYTD}</TableCell>
                <TableCell align="right">{val.BudgetYTD}</TableCell>
                <TableCell align="right">{val.varianceYTD}</TableCell>
              </Table>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    account: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    thisperiod: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        account: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        thisperiod: PropTypes.string.isRequired,
        sno: PropTypes.string.isRequired,
        budgetPerMonth: PropTypes.string.isRequired,
        varianceMonth: PropTypes.string.isRequired,
        ActualYTD: PropTypes.string.isRequired,
        BudgetYTD: PropTypes.string.isRequired,
        varianceYTD: PropTypes.string.isRequired,
      })
    ).isRequired,
    sno: PropTypes.string.isRequired,
    budgetPerMonth: PropTypes.string.isRequired,
    varianceMonth: PropTypes.string.isRequired,
    ActualYTD: PropTypes.string.isRequired,
    BudgetYTD: PropTypes.string.isRequired,
    varianceYTD: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "1",
    "5000100000",
    "Iteam 1",
    "23,30,000",
    "23,000",
    "130.50",
    "1,00,000.5",
    "20,00,000.6",
    "40,00,500"
  ),
  createData(
    "2",
    "5000100000",
    "Iteam 2",
    "23,30,000",
    "23,000",
    "130.50",
    "1,00,000.5",
    "20,00,000.6",
    "40,00,500"
  ),
  createData(
    "3",
    "5000100000",
    "Iteam 3",
    "23,30,000",
    "23,000",
    "130.50",
    "1,00,000.5",
    "20,00,000.6",
    "40,00,500"
  ),
];

export default function CollapsibleTable() {
  const [ShowData, setShowData] = useState([
    {
      sno: "1",
      account: "5000100000",
      item: "Iteam 1",
      thisperiod: "23,30,000",
      budgetPerMonth: "23,000",
      varianceMonth: "130.50",
      ActualYTD: "1,00,000.5",
      BudgetYTD: "20,00,000.6",
      varianceYTD: "40,00,500",
    },
    {
      sno: "2",
      account: "5000100000",
      item: "Iteam 2",
      thisperiod: "23,30,000",
      budgetPerMonth: "23,000",
      varianceMonth: "130.50",
      ActualYTD: "1,00,000.5",
      BudgetYTD: "20,00,000.6",
      varianceYTD: "40,00,500",
    },
    {
      sno: "3",
      account: "5000300000",
      item: "Iteam 3",
      thisperiod: "23,30,000",
      budgetPerMonth: "23,000",
      varianceMonth: "130.50",
      ActualYTD: "1,00,000.5",
      BudgetYTD: "20,00,000.6",
      varianceYTD: "40,00,500",
    },
  ]);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell align="right">Account</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">This Period</TableCell>
            <TableCell align="right">Budget Per Month</TableCell>
            <TableCell align="right">variance Month</TableCell>
            <TableCell align="right">ActualYTD</TableCell>
            <TableCell align="right">BudgetYTD</TableCell>
            <TableCell align="right">varianceYTD</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.sno} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
