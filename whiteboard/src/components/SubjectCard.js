import React from 'react';
import ReactDOM from 'react-dom';
import { DefaultEffects } from '@fluentui/react';
import { Card } from '@uifabric/react-cards';
import { divProperties, FontWeights, Text, DefaultPalette, Stack, TooltipHostBase} from 'office-ui-fabric-react';
import stackItemStyles from '../styles/commonStyles'

import Circle from 'react-circle';

// todo: clicking button should lead to another page
const alertClicked = () => {
  alert('Clicked');
};
  
class SubjectCard extends React.Component {

  constructor(props){
    super(props);
  }


    render() {
        
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

        // Styles definition
        const stackStyles = {
          root: {
            background: DefaultPalette.whiteTranslucent40,
          },
        };



        // Tokens definition
        const stackTokens = {
          childrenGap: 5,
          padding: 10,
        };
            

      return(
        <div>          
          <Stack horizontal styles={stackStyles} tokens={stackTokens}>            
            <Stack.Item grow={3} styles={stackItemStyles}>              

                <Card aria-label="Clickable vertical card" onClick={alertClicked} tokens={cardTokens} styles={courseStyles} style={{ boxShadow: DefaultEffects.elevation16 }}  >

                  <Card.Section
                    fill
                    verticalAlign="end"
                    styles={backgroundImageCardSectionStyles}
                    tokens={backgroundImageCardSectionTokens}>

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

            </Stack.Item>

            <Stack.Item grow={3} styles={stackItemStyles}>              
              <Circle progress={this.props.gradePercent} progressColor={this.props.courseColor} textColor={this.props.courseColor} animationDuration="1s" animate={true} size={150} />     
            </Stack.Item>


           </Stack>        
        </div>
      );
    }
}

export default SubjectCard;
  