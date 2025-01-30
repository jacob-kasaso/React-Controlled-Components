// import "@testing-library/jest-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Item from "../components/Item";

// test("the <li> does not have a className when initialized", () => {
//   const { container } = render(<Item name="Milk" category="Dairy" />);
//   expect(container.querySelector("li")).toBeInTheDocument();
//   expect(container.querySelector("li").className).not.toContain("in-cart");
// });

// test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
//   const { container } = render(<Item name="Milk" category="Dairy" />);
//   fireEvent.click(screen.getByText(/ Cart/));
//   expect(container.querySelector(".in-cart")).toBeInTheDocument();
// });


function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      category,
    };
    onItemFormSubmit(newItem);
    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Meat">Meat</option>
      </select>
      <button type="submit">Add Item</button>
    </form>
  );
}

