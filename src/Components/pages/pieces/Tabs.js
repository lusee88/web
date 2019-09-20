import React from 'react';


class Tabs extends React.Component {
    componentDidMount() {

    }
    render () {
        return (
            <div className="Tabs">
                {React.Children.map(this.props.children, (child, i) => {
                    return (
                        <div className="Tab" 
                            onClick={()=> {
                                this.props.onChange(child.key)
                            }}>
                        {child}
                        </div>
                    );
                })} 
                <div className="tabsUnderline">

                </div>
            </div>
        )
    }
}

export default Tabs;