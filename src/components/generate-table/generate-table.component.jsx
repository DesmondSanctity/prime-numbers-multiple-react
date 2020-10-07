import React from "react";

export default function createTable({ numbers }) {
  let tableHead = [];
  // table.push(<td> </td>);
  let child = [];

  for (let i = 0; i < numbers.length; i++) {
    child.push(<td>{`${numbers[i]}`}</td>);
  }
  tableHead.push(
    <thead>
      <tr>
        <td> </td>
        {child}
      </tr>
    </thead>
  );

  const tableBody = [];
  const table = [];
  // Outer loop to create parent
  for (let i = 0; i < numbers.length; i++) {
    let children = [];
    children.push(<td>{`${numbers[i]}`}</td>);

    //Inner loop to create children
    for (let j = 0; j < numbers.length; j++) {
      children.push(<td>{` ${numbers[j] * numbers[i]}`}</td>);
    }
    //Create the parent and add the children
    table.push(<tr>{children}</tr>);
  }
  tableBody.push(<tbody>{table}</tbody>);
  let completeTable = [];
  completeTable.push(tableHead);
  completeTable.push(tableBody);
  return completeTable;
}
