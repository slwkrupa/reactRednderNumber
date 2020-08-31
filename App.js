class App extends React.Component {

  constructor() {
    super();
    this.state = {
      text: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // state = {
  //   text: ""
  // }

  handleClick() {
    //this.state.text += "a"
    //console.log(this.state.text)

    const number = Math.floor(Math.random() * 10)
    
    // this.setState({
    //   text: this.state.text + letter
    // })

    this.setState(() => {
      return{
        text: this.state.text + number
      }
    })
  }

  render(){
    const btnName = "render your number"
    return(
      <>
        <button onClick={this.handleClick}>{/*this.props.btnTitle*/}{btnName}</button>
        <PanelResult tekst={this.state.text}>Your number!</PanelResult>
      </>
    )
  }
}

const PanelResult = (props) => {
  return <h1>{props.tekst} - {props.children}</h1>
}

ReactDOM.render(<App btnTitle="add a number"/>, 
document.getElementById('root'))