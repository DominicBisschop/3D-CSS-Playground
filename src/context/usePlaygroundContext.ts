import { useContext } from "react";
import PlaygroundContext, {
  PlaygroundContextValue,
} from "../context/playgroundContext";

const usePlaygroundContext = (): PlaygroundContextValue =>
  useContext(PlaygroundContext);

export default usePlaygroundContext;
