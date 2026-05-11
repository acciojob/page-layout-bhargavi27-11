import { Children } from "react"

const PageLayout = ({ header, footer, children}) => {
    return (
        <div>
            {header}
            {children}
            {footer}
        </div>
    );
};

export default pageLayout;