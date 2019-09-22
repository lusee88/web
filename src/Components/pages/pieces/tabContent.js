import React from 'react';
import EducationUW from './educationUW';
import EducationWLU from './educationWLU';
import TabList from './tabList';
import uw from './uw.png';
import wlu from './WLU.png';


export default class TabContent extends React.Component {
    render() {
        return (
            <div className="containerUp">
                
                <TabList>
                    <div label="Education" className="tab-content">
                        <div className="eduContent">
                            <p> I am pursuing a Double Degree in Computer Science and Business Administration</p>
                            <p>Select the different tabs above to learn more about my degree</p>
                            <div className="schoolImg">
                                <img src={uw}/>
                                <img src={wlu}/>
                            </div>
                        </div>
                        
                    
                    </div>
                    <div label="University of Waterloo" className="tab-content">
                        <EducationUW />
                    </div>
                    <div label="Wilfrid Laurier University" className="tab-content">
                        <br/>
                        <EducationWLU />
                    </div>
                </TabList>
               
            </div>
        );
    }
}