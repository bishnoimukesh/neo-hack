import './Layout.css';

const Layout = (props) => {
    return (
        <div className="layout-container">
            <div className="layout-header">
                <h1>Name</h1>
            </div>
            <div className="layout-content">
                {props.children}
            </div>
        </div>
    )
}

export {Layout}