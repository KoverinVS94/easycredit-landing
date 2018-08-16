import * as React from "react";

const hashClasses = require("main.scss");

export class SectionInfo extends React.Component {

    public render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className={`${hashClasses["section"]} ${hashClasses["section-info"]}`}>
                    
                </div>
            </React.Fragment>
        );
    }
}
