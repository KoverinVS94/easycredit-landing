import * as React from "react";
import { ControlledExpandElement } from "react-expand";

const hashClasses = require("main.scss");

export class SectionMain extends React.Component {
    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-main"]}`}>
                    
                </div>
            </React.Fragment>
        );
    }
}
