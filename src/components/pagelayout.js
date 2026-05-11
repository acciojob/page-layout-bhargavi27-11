import { Children } from "react"

const pageLayout = ({header,footer,childer}) => {
    return(
        <div>
            {header}
            {Children}
            {footer}
        </div>
    );
};

export default pageLayout;