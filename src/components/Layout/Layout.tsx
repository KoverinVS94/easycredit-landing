import * as React from "react";
import Helmet from "react-helmet";
import * as PropTypes from "prop-types";
import { ExpandController } from "react-expand";

import { Preloader } from "../Preloader";

import { SectionMain, SectionInfo } from "../Sections";

export interface LayoutProps {
    domain: string;
}

export const LayoutPropTypes: {[P in keyof LayoutProps]: PropTypes.Validator<any>} = {
    domain: PropTypes.string.isRequired
};

export class Layout extends React.Component<LayoutProps> {
    public static readonly propTypes = LayoutPropTypes;

    public render(): React.ReactNode {
        return (
            <ExpandController>
                <Preloader>
                    <Helmet>
                        <meta charSet="UTF-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1" />
                        <title>Займы на карту или наличными до 4000 за 7 минут в Украине</title>
                    </Helmet>
                    <SectionMain />
                    <SectionInfo />
                </Preloader>
            </ExpandController>
        );
    }
}
