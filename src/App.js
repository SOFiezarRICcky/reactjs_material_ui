import React, { Component } from 'react';
import './App.css';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nama: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let nama = this.state.name;
    let val = event.target.value;
    this.setState({
      [nama]: val
    });
  }

  handleNama = (event) => {
    let nama = event.target.name;
    let val = event.target.value;
    this.setState({
      [nama]: val
    });
  }

  handleHilang = (event) => {
    let nama = event.target.name;
    let val = event.target.value;
    this.setState({
      nama: ""
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleNama}>
          <Box component="span" display="block">
            <TextField
              id="standard-with-placeholder"
              label="Nama Lengkap"
              margin="normal"
              onChange={this.handleNama}
              name="nama"
            >
            </TextField>
          </Box>
          <Box component="span" display="block">
            <Button variant="contained" color="primary" type="reset" onClick={this.handleHilang}>
              Ganti Nama
            </Button>
          </Box>
          <h1>HI. {this.state.nama}</h1>
        </form>

      </div>
    );
  }
}

export default App;
