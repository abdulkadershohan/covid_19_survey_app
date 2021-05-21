import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

class Card extends Component {
    render() {
        return (
            <Container>


                    <Content>
                        <Button>
                            <Text>Click Me!</Text>
                        </Button>
                        <Button>
                            <Text>Click Me!</Text>
                        </Button>
                        <Button>
                            <Text>Click Me!</Text>
                        </Button>
                    </Content>


            </Container>
        );
    }
}

export default Card;
