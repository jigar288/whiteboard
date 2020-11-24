import React from 'react';
import { DefaultEffects } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import { FontWeights, Text } from 'office-ui-fabric-react';
import { withRouter } from "react-router-dom";

// todo: clicking button should lead to another page
  
//! fixme: avoid tightly coupling subject & grade progress components --> since subjects will be used elsewhere
class CalendarSubjectCard extends React.Component {

  constructor(props){
    super(props);
  }

    render() {
        
      const viewSubjectEvents = () => {
        this.props.history.push('/events', { subjectName : this.props.subjectName, courseColor: this.props.courseColor, subjectEvents: this.props.subjectEvents });
      };

        const backgroundImageCardSectionStyles = {
            root: {
              backgroundImage: `url(${this.props.courseImageURL})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              height: 144
            },
          };        

        const backgroundImageCardSectionTokens = { padding: 12 };
        const cardTokens = { childrenMargin: 12};

          const subduedTextStyles = {
            root: {
              color: this.props.cardTextColor,
            },
          };   
          
          const descriptionTextStyles = {
            root: {
              color: this.props.cardTextColor,
              fontWeight: FontWeights.bold,
            },
          };
          
        const courseStyles = {
            root: {
                backgroundColor: this.props.courseColor,                
            },            
        }
            
      return(
        <div>                  
            <Card aria-label="Clickable vertical card" onClick={viewSubjectEvents} tokens={cardTokens} styles={courseStyles} style={{ boxShadow: DefaultEffects.elevation16 }}  >

                <Card.Section fill verticalAlign="end" styles={backgroundImageCardSectionStyles} tokens={backgroundImageCardSectionTokens}>
                    {/* text component below is used for the image */}
                    <Text variant="superLarge">              
                    </Text>
                </Card.Section>

                <Card.Section>
                    <Text variant="small" styles={subduedTextStyles}>
                        {this.props.teacherName}
                    </Text>
                
                    <Text variant="xLarge" styles={descriptionTextStyles}> {this.props.subjectName}  </Text>
                </Card.Section>

            </Card>      
        </div>
      );
    }
}

export default withRouter(CalendarSubjectCard);
  