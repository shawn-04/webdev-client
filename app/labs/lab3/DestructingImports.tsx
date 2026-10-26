import Math, { add, subtract, multiply, divide, remainder } from "./Math";
import * as Matematica from "./Math";

const table = { width: "100%", borderCollapse: "collapse" as const };
const th = { textAlign: "left" as const, padding: "8px 12px", borderBottom: "2px solid #ccc" };
const td = { padding: "8px 12px", borderBottom: "1px solid #eee" };

export default function DestructingImports() {
  return (
    <div id="wd-destructuring-imports">
      <h2>Destructing Imports</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>Math</th>
            <th style={th}>Matematica</th>
            <th style={th}>Functions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Math.add(2, 3) = {Math.add(2, 3)}</td>
            <td style={td}>Matematica.add(2, 3) = {Matematica.add(2, 3)}</td>
            <td style={td}>add(2, 3) = {add(2, 3)}</td>
          </tr>
          <tr>
            <td style={td}>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
            <td style={td}>Matematica.subtract(5, 1) = {Matematica.subtract(5, 1)}</td>
            <td style={td}>subtract(5, 1) = {subtract(5, 1)}</td>
          </tr>
          <tr>
            <td style={td}>Math.multiply(3, 4) = {Math.multiply(3, 4)}</td>
            <td style={td}>Matematica.multiply(3, 4) = {Matematica.multiply(3, 4)}</td>
            <td style={td}>multiply(3, 4) = {multiply(3, 4)}</td>
          </tr>
          <tr>
            <td style={td}>Math.divide(8, 2) = {Math.divide(8, 2)}</td>
            <td style={td}>Matematica.divide(8, 2) = {Matematica.divide(8, 2)}</td>
            <td style={td}>divide(8, 2) = {divide(8, 2)}</td>
          </tr>
          <tr>
            <td style={td}>Math.add(10, 20) = {Math.add(10, 20)}</td>
            <td style={td}>Matematica.add(10, 20) = {Matematica.add(10, 20)}</td>
            <td style={td}>add(10, 20) = {add(10, 20)}</td>
          </tr>
          <tr>
            <td style={td}>Math.remainder(10, 3) = {Math.remainder(10, 3)}</td>
            <td style={td}>Matematica.remainder(10, 3) = {Matematica.remainder(10, 3)}</td>
            <td style={td}>remainder(10, 3) = {remainder(10, 3)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}