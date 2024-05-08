import {ReactDOM, ReactElement, ReactHTML, ReactNode} from "react";

export type Alert = {
	msg : ReactNode | string;
	uuid ?: string;
	type ?: null | 'info' | 'danger' | 'suc' | 'warn'
}
