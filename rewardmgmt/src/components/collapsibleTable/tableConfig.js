const tableConfig = {
    HeaderColumns: [
        
        {
            "label": "Customer",
            "attr": "name",
        },
        {
            "label": "Month",
            "attr": "month",
        },
        {
            "label": "Number of Transactions",
            "attr": "numTransactions",
        },
        {
            "label": "Reward Points",
            "attr": "points",
        }, {
            "label": "Total Rewards",
            "attr": "totalPointsByCustomer",
        }
    ],
    CollapsibleColumns: [
        {
            "label": "Transaction Date",
            "attr": "transactionDt",
        }, {
            "label": "Amount",
            "attr": "amt",
        }, {
            "label": "Points",
            "attr": "points",
        },
    ]

}

export default tableConfig;
