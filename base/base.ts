import type { FIELD_TYPES } from "../blocks/constants/constant";
import type { Client } from "@microsoft/microsoft-graph-client";

export interface BaseSchema {
  key?: string;
  name?: string;
  color?: string;
  toggleName?: string;
  blockType: blockType;
  icon?: string;
  stencil?: Stencil;
  studioShape?: StudioShape;
  editor?: Editor;
  runtime?: (cbk: BackendCBK) => Promise<void>;
}

export interface Stencil {
  group: string;
  fontSize: number;
}

export interface StudioShape {
  fontSize: number;
}

export interface Editor {
  elements: EditorField[];
}

export interface OutputProps {
  as?: keyof typeof FIELD_TYPES; // Assign this when want to set directly
  ref?: string; // Assign a custom function
}

export interface EditorField {
  ref: string;
  label?: string;
  component: string;
  componentProps: ComponentProps;
  showIf?: string | ((cbk: FrontendCBK) => boolean);
  validators?: ValidatorProps[];
  children?: EditorField[];
  output?: OutputProps;
}
export interface FrontendCBK {
  api: {
    get: <T extends object>(
      url: string,
      params?: Record<string, unknown>
    ) => Promise<T>;
  };
  // This one needs to be any because the general return is string however
  // for radio option it might be { "option_ref": "option_value" } where option_ref is dynamic.
  getElementValue(ref: string): any;
  setElementValue(ref: string, value: string | undefined): void;
  getVariableType(name: string): string;
  getAllVars(): VariableOption[];
  getRadioOptions(ref: string): string[];
}

interface VariableOption {
  label: string;
  value: string;
  type: string;
}

export interface BackendCBK {
  library: any; // TODO: proper type using CheckboxAI/CheckboxAPI
  apiClient: {
    msgraph: () => Promise<Client>;
    openai: () => Promise<any>; // TODO: proper type when we have CheckboxAI/CheckboxAPI
    checkbox: () => Promise<any>;
  };
  getIsPreview(): boolean;
  getUser(): {
    userNumber: number;
    userUUID: string;
    accountUUID: string;
  };
  getElementValue(ref: string): string;
  getVariable(name: string): any;
  setOutput(name: string, value: any): void;
  downloadFile(fileKey: string): Promise<any>;
  log(...message: any[]): void;
  getVariableType(name: string): string;
  hasInput(name: string): boolean;
  overwriteInput(name: string, value: any): void;
}

type CustomOptionString =
  | "getDateVariables"
  | "getExistingVariables"
  | "getFileVariables"
  | "getFormattableListVariables"
  | "getTextVariables"
  | "getRadioVariables"
  | "getRadioOptions";

export interface ComponentProps {
  label?: string;
  icon?: string; // svg path
  placeholder?: string;
  options?:
    | ComponentOptionProps[]
    | ((
        cbk: FrontendCBK,
        optionState?: OptionState
      ) => Promise<ComponentOptionProps[]>)
    | CustomOptionString;
  inputComponent?: EditorField;
  keyValueComponents?: (cbk: FrontendCBK) => Promise<KeyValueOptionProp[]>;
  isSearchable?: boolean;
  format?: string;
  whenChanged?: (cbk: FrontendCBK, value?: any) => void | string;
  variableAutoComplete?: boolean;
  includeEmptyErrorPlaceholder?: boolean;
  optionsRef?: string;
}

export interface KeyValueOptionProp {
  left: EditorField;
  right: EditorField;
}

export interface OptionState {
  searchTerm?: string;
  selectedValue?: string;
}

export interface ComponentOptionProps {
  label: string;
  value: string | number;
  defaultChecked?: boolean;
}

export interface ValidatorProps {
  method: string;
  value?: string;
  message: string;
}

//A functional block type is one that does not have any user interaction during the assessment runtime (e.g. some calculation). A frontend block requires assesment interaction with the block (e.g. form block).
type blockType = "functional" | "frontend";
