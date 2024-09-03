import type { BackendCBK } from "../../base";

export const tryGetVariable = (cbk: BackendCBK, variableName: string) => {
    try {
        return cbk.getVariable(variableName);
    } catch (error) {
        cbk.log(`Error fetching variable ${variableName}:`, error);
        return null; // Handle the error as needed
    }
}
