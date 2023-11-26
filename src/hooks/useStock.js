import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

const useStock = () => useContext(StockContext)

export default useStock