import Link from "next/link";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import NullUndefined from "./NullUndefined";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import IncludesSomeEvery from "./IncludesSomeEvery";
import ReduceFunction from "./ReduceFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreader from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import OptionalChaining from "./OptionalChaining";
import Classes from "./Classes";
import Styles from "./Styles";
import ClientComponent from "./ClientComponent";
import ServerComponent from "./ServerComponent";
import SuspenseDemo from "./SuspenseDemo";
import ClientOnlyApis from "./ClientOnlyApis";
import ServerOnlyApis from "./ServerOnlyApis";
import Add from "./Add";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import TodoList from "./TodoList";

export default function Lab3() {
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <NullUndefined />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <IncludesSomeEvery />
      <ReduceFunction />
      <JsonStringify />
      <House />
      <Spreader />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <OptionalChaining />

      <div id="wd-typescript-types">
        <h4>TypeScript Types</h4>
        <Link href="/labs/lab3/types">Open the TypeScript Types page</Link>
        <hr />
      </div>

      <Classes />
      <Styles />

      <ClientComponent />
      <ServerComponent />
      <SuspenseDemo />
      <ClientOnlyApis />
      <ServerOnlyApis />

      <div id="wd-child-components">
        <h4>Child Components</h4>
        <Add a={3} b={4} />
        <Add a={10} b={20} />
      </div>

      <div id="wd-composing-styles">
        <h4>Composing Styles with Children</h4>
        <p>
          <Highlight>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Highlight>
        </p>
        <p>
          <Highlight>Every component I build makes Kambaz a little more real.</Highlight>
        </p>
        <p>
          <Highlight>
            Children can be text, <b>bold text</b>, or any other JSX
          </Highlight>
        </p>
        <hr />
      </div>

      <PathParameters />
      <TodoList />
    </div>
  );
}
