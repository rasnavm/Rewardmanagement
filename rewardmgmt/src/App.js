import "./App.css";

import CollapsibleTable from "./components/collapsibleTable/CollapsibleTable";
import Table from "./components/table/Table";
import fetch from "./api/apis";
import { useEffect, useState } from "react";

//import baseData from "./data";

function App() {
  const [data, setData] = useState([]);
  const [transactionData,setTransactionData] = useState([]);

  useEffect(() => {
    fetch().then((transactionData) => {
      setTransactionData(transactionData);
      async function createSummary(data) {
        let promise = new Promise((resolve, reject) => {
          const RewardsPerTransaction = data.map((transaction) => {
            let points = calulateReward(transaction.amt);
            const month = new Date(transaction.transactionDt).getMonth();
            return { ...transaction, points, month };
          });

          let byCustomer = {};
          let totalPointsByCustomer = {};
          RewardsPerTransaction.forEach((rewardsPerTransaction) => {
            let {
              custid,
              name,
              month,
              points,
              transactionDt,
            } = rewardsPerTransaction;
            if (!byCustomer[custid]) {
              byCustomer[custid] = [];
            }
            if (!totalPointsByCustomer[custid]) {
              totalPointsByCustomer[custid] = 0;
            }

            totalPointsByCustomer[custid] += points;

            if (byCustomer[custid][month]) {
              byCustomer[custid][month].points += points;
              byCustomer[custid][month].monthNumber = month;
              byCustomer[custid][month].numTransactions++;
            } else {
              byCustomer[custid][month] = {
                custid,
                name,
                month: new Date(transactionDt).toLocaleString("en-us", {
                  month: "long",
                }),
                numTransactions: 1,
                points,
              };
            }
          });

          resolve({
            transactionSummaryData: mergeObjects(
              byCustomer,
              totalPointsByCustomer,
              RewardsPerTransaction
            ),
          });
        });

        promise.then((data) => {
          setData(data.transactionSummaryData);
        });

      }

      createSummary(transactionData);

    });
  }, []);

  function mergeObjects(
    summaryByCustomerMonth,
    summaryByCustomer,
    RewardsPerTransaction
  ) {
    let mergedData = [];

    for (var key in summaryByCustomerMonth) {
      console.log(key);

      summaryByCustomerMonth[key].forEach((row) => {
        row.totalPointsByCustomer = summaryByCustomer[key];

        let detailedTransactionList = RewardsPerTransaction.filter(
          (innerrow) => {
            return (
              innerrow.custid === row.custid &&
              innerrow.month === row.monthNumber
            );
          }
        );
        row.details = detailedTransactionList;
        mergedData.push(row);
      });
    }

    return mergedData;
  }

  function calulateReward(amt) {
    let points = 0;
    if (amt > 100) {
      points = 2 * (amt - 100) + 50;
    } else if (amt > 50 && amt <= 100) {
      points = amt - 50;
    } else {
      points = 0;
    }
    return points;
  }
  return (
    <div className="topContainer">
      <div className="App">
        <CollapsibleTable data={data} />
      </div>
      <div className="App">
        <Table data={transactionData}></Table>
      </div>
    </div>
  );
}

export default App;
