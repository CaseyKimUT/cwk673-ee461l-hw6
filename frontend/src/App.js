import React from 'react';
import { Button, Stack } from '@mui/material';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      nameOutput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
        nameInput: event.target.value,
     });
  }

  handleOnClick() {
    fetch("/name/" + this.state.nameInput) // use 'http://127.0.0.1:5000/name/ + this.state.nameInput for local'
      .then(response => 
        response.json()
      )
      .then(data => {
        this.setState({
          nameOutput: data.lnameOut
        })
        console.log(data.lnameOut)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Stack alignItems='flex-start' spacing={1}>
        <div>Your Input Request to Server</div>
        
        <input type="text" value={this.state.nameInput} onChange={this.handleChange} />

        <div>Response from server</div>

        <div>{this.state.nameOutput}</div>

        <Button onClick={() => this.handleOnClick()}>
          Submit
        </Button>
                 
      </Stack>
    );
  }

}

export default App;
