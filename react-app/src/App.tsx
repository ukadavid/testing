// import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseFilter from "./Expense-tracker/component/ExpenseFilter";
import ExpenseForm from "./Expense-tracker/component/ExpenseForm";
import ExpenseList from "./Expense-tracker/component/ExpenseList";
import categories from "./Expense-tracker/category";
// import { Icon } from "./components/Icon";

// const handleOnSelect = (item: string) => {
//   console.log(item);
// };

// function App() {
//   const item = ["Nigeria", "Ghana", "USA", "Canada"];
//   return (
//     <ListGroup title={item} cities="Cities" onSelectItem={handleOnSelect} />
//   );
// }

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aaa", amount: 10, category: "Utilities" },
    { id: 3, description: "aaa", amount: 10, category: "Utilities" },
    { id: 4, description: "aaa", amount: 10, category: "Utilities" },
    { id: 5, description: "aaa", amount: 10, category: "Utilities" },
    { id: 6, description: "aaa", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
